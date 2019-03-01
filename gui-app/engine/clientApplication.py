import os
import requests
import json
import cv2
import numpy as np

from object_detection.utils import label_map_util
from object_detection.utils import visualization_utils as vis_util

CWD_PATH = os.getcwd()
PATH_TO_LABELS = os.path.join(CWD_PATH,'object_detection/instruments_labelmap.pbtxt')
NUM_CLASSES = 2

label_map = label_map_util.load_labelmap(PATH_TO_LABELS)
categories = label_map_util.convert_label_map_to_categories(label_map, max_num_classes=NUM_CLASSES, use_display_name=True)
category_index = label_map_util.create_category_index(categories)

WEBAPIURL = "http://127.0.0.1:5000/"

video = cv2.VideoCapture(0)
ret = video.set(3,800)
ret = video.set(4,600)

while(True):

    ret, frame = video.read()
    frame_expanded = np.expand_dims(frame, axis=0)
    frameList = frame_expanded.tolist()

    response = requests.get(WEBAPIURL+"getDetectionData",json = {'data':frameList})

    #contents = urllib.request.urlopen(webAPIurl+"detections/"+frameID.decode()).read()
    json_data = json.loads(response.text)
    #print(json_data['boxes'])
    #print(json_data['scores'])
    #print(json_data['classes'])
    boxes = np.asarray(json_data['boxes'])
    scores = np.asarray(json_data['scores'])
    classes = np.asarray(json_data['classes'])

    vis_util.visualize_boxes_and_labels_on_image_array(
        frame,
        np.squeeze(boxes),
        np.squeeze(classes).astype(np.int32),
        np.squeeze(scores),
        category_index,
        use_normalized_coordinates=True,
        line_thickness=8,
        min_score_thresh=0.10)

    # All the results have been drawn on the frame, so it's time to display it.
    cv2.imshow('Object detector', frame)

    # Press 'q' to quit
    if cv2.waitKey(1) == ord('q'):
        break

video.release()
cv2.destroyAllWindows()
