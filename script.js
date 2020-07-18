TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_t.jpg",
  "hfovMax": 132,
  "label": "YIVR_Stitch_0827_360_200714221436_360_equi",
  "audios": [
   {
    "data": {
     "label": "bensound-birthofahero"
    },
    "class": "PanoramaAudio",
    "id": "audio_68FDFCDE_641D_38D3_41D5_3195B7058BA7",
    "audio": {
     "mp3Url": "media/audio_68FDFCDE_641D_38D3_41D5_3195B7058BA7.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_68FDFCDE_641D_38D3_41D5_3195B7058BA7.ogg"
    },
    "autoplay": true
   }
  ],
  "cardboardMenu": {
   "class": "Menu",
   "opacity": 0.4,
   "fontFamily": "Arial",
   "selectedFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF",
   "id": "Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0827_360_200714221436_360_equi",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0835_360_200714222508_360",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0850_360_200714224029_360",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0856_360_200714223957_360",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0864_360_200714223621_360",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0874_360_200714223342_360",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0904_360_200714224117_360",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0900_360_200714224634_360_equi",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0896_360_200714230732_360_equi",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "YIVR_Stitch_0890_360_200714230921_360_equi",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "rollOverBackgroundColor": "#000000",
   "rollOverOpacity": 0.8
  },
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_t.jpg",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.5,
      "id": "overlay_5C47D387_5217_4352_41B1_81BBDB4A44BC",
      "bleaching": 0.4,
      "yaw": -79.52,
      "pitch": 45.52
     },
     {
      "hfov": 48,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "buttonPause": {
   "paddingRight": 0,
   "rollOverIconURL": "skin/IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A_rollover.png",
   "iconURL": "skin/IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A.png",
   "width": 34,
   "paddingBottom": 0,
   "height": 34,
   "mode": "push",
   "verticalAlign": "middle",
   "paddingTop": 0,
   "shadow": false,
   "maxWidth": 34,
   "click": "this.setComponentVisibility(this.Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE, false, 0, null, null, false)",
   "maxHeight": 34,
   "propagateClick": false,
   "cursor": "hand",
   "top": 20,
   "horizontalAlign": "center",
   "minHeight": 30,
   "id": "IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A",
   "data": {
    "name": "X"
   },
   "borderSize": 0,
   "paddingLeft": 0,
   "class": "IconButton",
   "transparencyActive": true,
   "backgroundOpacity": 0,
   "minWidth": 30,
   "right": 20,
   "borderRadius": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "initialPosition": {
   "hfov": 128,
   "class": "PanoramaCameraPosition",
   "yaw": -2.3,
   "pitch": 5.4
  },
  "class": "PanoramaCamera",
  "id": "panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 11.67,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 11.67,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 11.67,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_t.jpg",
  "hfovMax": 130,
  "label": "YIVR_Stitch_0835_360_200714222508_360",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_t.jpg",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.47,
      "id": "overlay_5F044448_4F1D_5EDC_41A6_283C2D55E0C2",
      "bleaching": 0.41,
      "yaw": 75.33,
      "pitch": 43.33
     },
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": -5.83,
   "pitch": 2.02
  },
  "class": "PanoramaCamera",
  "id": "panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.08,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.08,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.08,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_t.jpg",
  "hfovMax": 130,
  "label": "YIVR_Stitch_0850_360_200714224029_360",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_t.jpg",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.4,
      "id": "overlay_41E8A472_4F1B_DECF_41D2_5E986685AD5F",
      "bleaching": 0.59,
      "yaw": -9.78,
      "pitch": 41.68
     },
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": -9.95,
   "pitch": 5.19
  },
  "class": "PanoramaCamera",
  "id": "panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_t.jpg",
  "hfovMax": 130,
  "label": "YIVR_Stitch_0856_360_200714223957_360",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_t.jpg",
    "overlays": [
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "cubic_in",
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "linear",
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "cubic_out",
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_t.jpg",
  "hfovMax": 130,
  "label": "YIVR_Stitch_0864_360_200714223621_360",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_t.jpg",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.62,
      "id": "overlay_5F38AB98_4F0F_AA7C_41BF_5BB9248F15A3",
      "bleaching": 0.5,
      "yaw": 63.52,
      "pitch": 34.54
     },
     {
      "hfov": 45,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 121,
   "class": "PanoramaCameraPosition",
   "yaw": 114.31,
   "pitch": -10.47
  },
  "class": "PanoramaCamera",
  "id": "panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.08,
     "easing": "cubic_in",
     "yawDelta": -18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.08,
     "easing": "linear",
     "yawDelta": -323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.08,
     "easing": "cubic_out",
     "yawDelta": -18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_t.jpg",
  "hfovMax": 130,
  "label": "YIVR_Stitch_0874_360_200714223342_360",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_t.jpg",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.55,
      "id": "overlay_5F1CEEA2_4F1A_EA4C_41CE_353ECD5CE71B",
      "bleaching": 0.35,
      "yaw": -141.56,
      "pitch": 36.74
     },
     {
      "hfov": 48,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 9.55,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 9.55,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 9.55,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_t.jpg",
  "hfovMax": 130,
  "label": "YIVR_Stitch_0904_360_200714224117_360",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_t.jpg",
    "overlays": [
     {
      "hfov": 48,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 123,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "id": "panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 10.61,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_5D84AC1D_52A8_9506_41BB_A8544597C948",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_t.jpg",
  "hfovMax": 130,
  "label": "YIVR_Stitch_0900_360_200714224634_360_equi",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5D84AC1D_52A8_9506_41BB_A8544597C948.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_t.jpg",
    "overlays": [
     {
      "hfov": 48,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 121,
   "class": "PanoramaCameraPosition",
   "yaw": -174.54,
   "pitch": -19.25
  },
  "class": "PanoramaCamera",
  "id": "panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_t.jpg",
  "hfovMax": 137,
  "label": "YIVR_Stitch_0896_360_200714230732_360_equi",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_t.jpg",
    "overlays": [
     {
      "hfov": 48,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 135,
   "class": "PanoramaCameraPosition",
   "yaw": -42.17,
   "pitch": 13.15
  },
  "class": "PanoramaCamera",
  "id": "panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "vfov": 180,
  "hfovMin": 60,
  "id": "panorama_43E8831A_53AC_8310_41D2_893D179D6367",
  "pitch": 0,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_43E8831A_53AC_8310_41D2_893D179D6367_t.jpg",
  "hfovMax": 131,
  "label": "YIVR_Stitch_0890_360_200714230921_360_equi",
  "cardboardMenu": "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_43E8831A_53AC_8310_41D2_893D179D6367_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_43E8831A_53AC_8310_41D2_893D179D6367.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_43E8831A_53AC_8310_41D2_893D179D6367_t.jpg",
    "overlays": [
     {
      "hfov": 48,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_43E8831A_53AC_8310_41D2_893D179D6367_tcap0",
      "inertia": false,
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "class": "ImageResourceLevel",
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ]
 },
 {
  "initialPosition": {
   "hfov": 125,
   "class": "PanoramaCameraPosition",
   "yaw": 141.53,
   "pitch": 0.12
  },
  "class": "PanoramaCamera",
  "id": "panorama_43E8831A_53AC_8310_41D2_893D179D6367_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D",
    "end": "this.setComponentVisibility(this.Image_5671619A_5839_172D_41D4_B9821C748878, false, -1, this.effect_57874399_583B_3B2F_41B4_D38DE09F942D, 'hideEffect', false); this.setComponentVisibility(this.Image_5671619A_5839_172D_41D4_B9821C748878, false, -1, this.effect_57874399_583B_3B2F_41B4_D38DE09F942D, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.Image_5671619A_5839_172D_41D4_B9821C748878, true, -1, this.effect_57875398_583B_3B2D_41C9_7B29959DE638, 'showEffect', false)",
    "camera": "this.panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5D84AC1D_52A8_9506_41BB_A8544597C948",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_43E8831A_53AC_8310_41D2_893D179D6367",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "camera": "this.panorama_43E8831A_53AC_8310_41D2_893D179D6367_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D",
    "end": "this.setComponentVisibility(this.Image_5671619A_5839_172D_41D4_B9821C748878, false, -1, this.effect_57874399_583B_3B2F_41B4_D38DE09F942D, 'hideEffect', false); this.setComponentVisibility(this.Image_5671619A_5839_172D_41D4_B9821C748878, false, -1, this.effect_57874399_583B_3B2F_41B4_D38DE09F942D, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 0, 1); this.setComponentVisibility(this.Image_5671619A_5839_172D_41D4_B9821C748878, true, -1, this.effect_57875398_583B_3B2D_41C9_7B29959DE638, 'showEffect', false)",
    "camera": "this.panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 1, 2)",
    "camera": "this.panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 2, 3)",
    "camera": "this.panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 3, 4)",
    "camera": "this.panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 4, 5)",
    "camera": "this.panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 5, 6)",
    "camera": "this.panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 6, 7)",
    "camera": "this.panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5D84AC1D_52A8_9506_41BB_A8544597C948",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 7, 8)",
    "camera": "this.panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 8, 9)",
    "camera": "this.panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_43E8831A_53AC_8310_41D2_893D179D6367",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 9, 0)",
    "camera": "this.panorama_43E8831A_53AC_8310_41D2_893D179D6367_camera"
   }
  ]
 },
 "this.Menu_6A16A5F3_641E_C8D1_41D1_57AF3DAA7B32",
 {
  "class": "FadeInEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_57875398_583B_3B2D_41C9_7B29959DE638"
 },
 {
  "class": "FadeOutEffect",
  "duration": 1000,
  "easing": "cubic_in_out",
  "id": "effect_57874399_583B_3B2F_41B4_D38DE09F942D"
 },
 "this.effect_57875398_583B_3B2D_41C9_7B29959DE638",
 "this.effect_57874399_583B_3B2F_41B4_D38DE09F942D",
 "this.audio_68FDFCDE_641D_38D3_41D5_3195B7058BA7"
], "children": [
 {
  "toolTipPaddingLeft": 6,
  "progressBorderSize": 0,
  "toolTipFontColor": "#606060",
  "toolTipBorderSize": 1,
  "paddingRight": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarLeft": 0,
  "toolTipDisplayTime": 600,
  "playbackBarHeadHeight": 15,
  "transitionDuration": 500,
  "progressBorderRadius": 0,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 1,
  "progressBarBorderColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipPaddingRight": 6,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "transitionMode": "blending",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontWeight": "normal",
  "toolTipPaddingTop": 4,
  "toolTipOpacity": 1,
  "playbackBarHeight": 10,
  "class": "ViewerArea",
  "minHeight": 50,
  "paddingLeft": 0,
  "playbackBarHeadWidth": 6,
  "toolTipFontFamily": "Arial",
  "playbackBarRight": 0,
  "minWidth": 100,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "toolTipBorderRadius": 3,
  "progressBarBorderRadius": 0,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "width": "100%",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "paddingTop": 0,
  "toolTipFontSize": 12,
  "toolTipFontStyle": "normal",
  "shadow": false,
  "progressLeft": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderSize": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBottom": 0,
  "propagateClick": false,
  "progressHeight": 10,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "bottom": "0%",
  "toolTipTextShadowColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowVerticalLength": 0,
  "left": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadow": true,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "borderRadius": 0,
  "progressBarOpacity": 1
 },
 {
  "paddingRight": 0,
  "width": "100%",
  "paddingBottom": 0,
  "height": "29.71%",
  "verticalAlign": "top",
  "url": "skin/Image_38AE0033_3506_F021_416B_4DF12FECDFC8.png",
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 1920,
  "scaleMode": "fill",
  "maxHeight": 271,
  "propagateClick": false,
  "horizontalAlign": "left",
  "visible": false,
  "top": 0,
  "id": "Image_38AE0033_3506_F021_416B_4DF12FECDFC8",
  "data": {
   "name": "white stripe"
  },
  "minHeight": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "class": "Image",
  "backgroundOpacity": 0,
  "left": 0,
  "borderRadius": 0,
  "minWidth": 1
 },
 {
  "paddingRight": 0,
  "width": "100%",
  "paddingBottom": 0,
  "height": "32%",
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "verticalAlign": "top",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "visible": false,
  "top": 0,
  "creationPolicy": "delayed",
  "id": "Container_32774EFE_3505_5022_41AB_699D4C74C8C0",
  "data": {
   "name": "- UPPER BUTTON SET"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "absolute",
  "class": "Container",
  "backgroundOpacity": 0,
  "left": 0,
  "borderRadius": 0,
  "children": [
   {
    "paddingRight": 10,
    "width": 498,
    "paddingBottom": 10,
    "height": 98,
    "scrollBarColor": "#000000",
    "paddingTop": 10,
    "shadow": false,
    "scrollBarMargin": 2,
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "top": 31,
    "id": "HTMLText_3D347B78_3503_302E_41BA_D209C34F0BE6",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:'Arial Black', Gadget, sans-serif;\"><B>COMPANY</B></SPAN><SPAN STYLE=\"font-size:33px;\">LOGO</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">www.company.com</SPAN></SPAN></DIV></div>",
    "data": {
     "name": "Company logo"
    },
    "minHeight": 1,
    "paddingLeft": 10,
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "class": "HTMLText",
    "backgroundOpacity": 0,
    "left": 36.24,
    "minWidth": 1,
    "borderRadius": 0
   },
   {
    "children": [
     {
      "label": "BUTTON 1",
      "paddingRight": 0,
      "fontColor": "#666666",
      "width": 100,
      "paddingBottom": 0,
      "height": 44,
      "mode": "push",
      "fontSize": 15,
      "verticalAlign": "middle",
      "fontFamily": "Arial",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "fontStyle": "normal",
      "iconWidth": 32,
      "gap": 5,
      "fontWeight": "bold",
      "backgroundColorRatios": [
       0,
       1
      ],
      "propagateClick": false,
      "cursor": "hand",
      "borderColor": "#000000",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "Button_3D99702F_350D_5022_41C3_F32EBDE4AC3A",
      "shadowBlurRadius": 6,
      "paddingLeft": 0,
      "shadowColor": "#000000",
      "textDecoration": "none",
      "shadowSpread": 1,
      "iconBeforeLabel": true,
      "class": "Button",
      "layout": "horizontal",
      "iconHeight": 32,
      "backgroundOpacity": 0,
      "rollOverFontColor": "#333333",
      "borderRadius": 0,
      "data": {
       "name": "Button 1"
      },
      "borderSize": 0,
      "minWidth": 1
     },
     {
      "label": "BUTTON 2",
      "paddingRight": 0,
      "fontColor": "#666666",
      "width": 100,
      "paddingBottom": 0,
      "height": 44,
      "mode": "push",
      "fontSize": 15,
      "verticalAlign": "middle",
      "fontFamily": "Arial",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "fontStyle": "normal",
      "iconWidth": 32,
      "gap": 5,
      "fontWeight": "bold",
      "backgroundColorRatios": [
       0,
       1
      ],
      "propagateClick": false,
      "cursor": "hand",
      "borderColor": "#000000",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "Button_3C071467_3505_5021_41C0_9CD078438C82",
      "shadowBlurRadius": 6,
      "paddingLeft": 0,
      "shadowColor": "#000000",
      "textDecoration": "none",
      "shadowSpread": 1,
      "iconBeforeLabel": true,
      "class": "Button",
      "layout": "horizontal",
      "iconHeight": 32,
      "backgroundOpacity": 0,
      "rollOverFontColor": "#333333",
      "borderRadius": 0,
      "data": {
       "name": "Button 2"
      },
      "borderSize": 0,
      "minWidth": 1
     },
     {
      "label": "BUTTON 3",
      "paddingRight": 0,
      "fontColor": "#666666",
      "width": 100,
      "paddingBottom": 0,
      "height": 44,
      "mode": "push",
      "fontSize": 15,
      "verticalAlign": "middle",
      "fontFamily": "Arial",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "fontStyle": "normal",
      "iconWidth": 32,
      "gap": 5,
      "fontWeight": "bold",
      "backgroundColorRatios": [
       0,
       1
      ],
      "propagateClick": false,
      "cursor": "hand",
      "borderColor": "#000000",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "Button_3C5B5026_3507_7023_418D_5AEF13450F0A",
      "shadowBlurRadius": 6,
      "paddingLeft": 0,
      "shadowColor": "#000000",
      "textDecoration": "none",
      "shadowSpread": 1,
      "iconBeforeLabel": true,
      "class": "Button",
      "layout": "horizontal",
      "iconHeight": 32,
      "backgroundOpacity": 0,
      "rollOverFontColor": "#333333",
      "borderRadius": 0,
      "data": {
       "name": "Button 3"
      },
      "borderSize": 0,
      "minWidth": 1
     },
     {
      "label": "BUTTON 4",
      "paddingRight": 0,
      "fontColor": "#666666",
      "width": 100,
      "paddingBottom": 0,
      "height": 44,
      "mode": "push",
      "fontSize": 15,
      "verticalAlign": "middle",
      "fontFamily": "Arial",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "fontStyle": "normal",
      "iconWidth": 32,
      "gap": 5,
      "fontWeight": "bold",
      "backgroundColorRatios": [
       0,
       1
      ],
      "propagateClick": false,
      "cursor": "hand",
      "borderColor": "#000000",
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "Button_3C6B7BF5_3505_5021_41B1_F65D95672705",
      "shadowBlurRadius": 6,
      "paddingLeft": 0,
      "shadowColor": "#000000",
      "textDecoration": "none",
      "shadowSpread": 1,
      "iconBeforeLabel": true,
      "class": "Button",
      "layout": "horizontal",
      "iconHeight": 32,
      "backgroundOpacity": 0,
      "rollOverFontColor": "#333333",
      "borderRadius": 0,
      "data": {
       "name": "Button 4"
      },
      "borderSize": 0,
      "minWidth": 1
     }
    ],
    "paddingRight": 0,
    "width": 796,
    "paddingBottom": 0,
    "height": 70.95,
    "overflow": "scroll",
    "verticalAlign": "middle",
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 9,
    "contentOpaque": false,
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "right",
    "top": 0,
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_3D9A43EF_350D_5021_41B3_B4C8121813DC",
    "data": {
     "name": "Container button set"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "minWidth": 1,
    "right": 29,
    "borderRadius": 0
   }
  ],
  "minWidth": 1
 },
 {
  "itemThumbnailWidth": 100,
  "paddingRight": 20,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "paddingBottom": 10,
  "itemLabelFontStyle": "normal",
  "itemBorderColor": "#FFFFFF",
  "verticalAlign": "top",
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowColor": "#000000",
  "itemLabelHorizontalAlign": "center",
  "gap": 10,
  "backgroundColorRatios": [
   0
  ],
  "scrollBarOpacity": 0.5,
  "itemPaddingTop": 3,
  "itemMode": "thumbnail-only",
  "scrollBarWidth": 5,
  "itemPaddingRight": 3,
  "horizontalAlign": "left",
  "playList": "this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist",
  "itemThumbnailHeight": 68,
  "itemBorderSize": 0,
  "minHeight": 1,
  "paddingLeft": 20,
  "itemLabelFontFamily": "Arial",
  "itemOpacity": 1,
  "class": "ThumbnailList",
  "itemVerticalAlign": "middle",
  "itemBorderRadius": 0,
  "backgroundOpacity": 0.3,
  "rollOverItemBorderSize": 0,
  "itemLabelGap": 5,
  "layout": "horizontal",
  "selectedItemLabelFontWeight": "bold",
  "itemLabelPosition": "bottom",
  "minWidth": 1,
  "rollOverItemBackgroundColor": [],
  "itemThumbnailShadow": true,
  "itemBackgroundColor": [],
  "itemPaddingLeft": 3,
  "itemBackgroundColorRatios": [],
  "rollOverItemThumbnailShadowBlurRadius": 10,
  "width": "100%",
  "rollOverItemBorderRadius": 0,
  "itemPaddingBottom": 3,
  "scrollBarColor": "#000000",
  "itemThumbnailOpacity": 1,
  "itemThumbnailBorderRadius": 0,
  "itemThumbnailShadowHorizontalLength": 0,
  "itemHorizontalAlign": "center",
  "backgroundColorDirection": "vertical",
  "paddingTop": 16,
  "shadow": false,
  "rollOverItemThumbnailShadowOpacity": 1,
  "itemLabelTextDecoration": "none",
  "scrollBarMargin": 2,
  "itemThumbnailShadowBlurRadius": 5,
  "propagateClick": false,
  "scrollBarVisible": "rollOver",
  "itemThumbnailScaleMode": "fit_outside",
  "bottom": 0,
  "id": "ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8",
  "data": {
   "name": "ThumbnailList"
  },
  "borderSize": 0,
  "itemLabelFontWeight": "normal",
  "itemBackgroundColorDirection": "vertical",
  "itemLabelFontSize": 14,
  "itemBackgroundOpacity": 0,
  "left": "0%",
  "borderRadius": 0,
  "itemThumbnailShadowVerticalLength": 0,
  "itemLabelFontColor": "#FFFFFF",
  "rollOverItemBackgroundColorRatios": [],
  "itemThumbnailShadowOpacity": 0.3
 },
 {
  "paddingRight": 0,
  "width": 85,
  "paddingBottom": 0,
  "overflow": "scroll",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 0,
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "top": "5%",
  "minHeight": 1,
  "bottom": "5%",
  "id": "Container_3FEB359B_3662_45B1_41A1_0A030760AA1D",
  "data": {
   "name": "- RIGHT BUTTON SET"
  },
  "borderSize": 0,
  "paddingLeft": 0,
  "creationPolicy": "delayed",
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "layout": "vertical",
  "backgroundOpacity": 0,
  "borderRadius": 0,
  "right": 0,
  "children": [
   {
    "toolTipPaddingLeft": 6,
    "toolTipTextShadowOpacity": 0,
    "toolTipBorderRadius": 3,
    "paddingRight": 0,
    "toolTip": "Fullscreen",
    "toolTipFontColor": "#606060",
    "toolTipBorderSize": 1,
    "iconURL": "skin/IconButton_5B7E71AC_5712_EB49_41B2_5B0060EAAFC7.png",
    "width": 49,
    "paddingBottom": 0,
    "height": 39,
    "mode": "toggle",
    "toolTipDisplayTime": 600,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipBorderColor": "#767676",
    "verticalAlign": "top",
    "paddingTop": 0,
    "toolTipShadowOpacity": 1,
    "toolTipFontSize": 12,
    "shadow": false,
    "maxWidth": 128,
    "toolTipShadowHorizontalLength": 0,
    "toolTipFontStyle": "normal",
    "toolTipShadowBlurRadius": 3,
    "maxHeight": 128,
    "toolTipShadowSpread": 0,
    "toolTipPaddingRight": 6,
    "propagateClick": false,
    "cursor": "hand",
    "toolTipShadowColor": "#333333",
    "horizontalAlign": "center",
    "minHeight": 1,
    "toolTipTextShadowColor": "#000000",
    "id": "IconButton_5B7E71AC_5712_EB49_41B2_5B0060EAAFC7",
    "toolTipOpacity": 1,
    "toolTipFontWeight": "normal",
    "data": {
     "name": "IconButton1493"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "toolTipFontFamily": "Arial",
    "toolTipShadowVerticalLength": 0,
    "transparencyActive": true,
    "backgroundOpacity": 0,
    "toolTipPaddingTop": 4,
    "toolTipPaddingBottom": 4,
    "minWidth": 1,
    "toolTipBackgroundColor": "#F6F6F6",
    "borderRadius": 0
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A_rollover.png",
    "iconURL": "skin/IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A.png",
    "width": 57,
    "paddingBottom": 0,
    "height": 57,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "click": "this.openLink(\"http://www.vrtourist.net\", \"_blank\")",
    "maxHeight": 57,
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A",
    "data": {
     "name": "IconButton info"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "transparencyActive": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC_rollover.png",
    "iconURL": "skin/IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC.png",
    "width": 57,
    "paddingBottom": 0,
    "height": 57,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "click": "this.setComponentVisibility(this.Container_E0A829D0_C5BB_E407_41E3_334A63423D29, true, 0, null, null, false)",
    "maxHeight": 57,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC",
    "data": {
     "name": "IconButton floorplan"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "transparencyActive": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "iconURL": "skin/IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C.png",
    "width": 55,
    "paddingBottom": 0,
    "height": 55,
    "mode": "toggle",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "click": "if(!this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8.get('visible')){ this.setComponentVisibility(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8, true, 0, null, null, false) } else if(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8.get('visible')){ this.setComponentVisibility(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8, false, 0, null, null, false) }",
    "maxHeight": 57,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C",
    "data": {
     "name": "IconButton thumblist"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C_pressed.png",
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3_rollover.png",
    "iconURL": "skin/IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3.png",
    "width": 57,
    "paddingBottom": 0,
    "height": 57,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "click": "this.setComponentVisibility(this.Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE, true, 0, null, null, false)",
    "maxHeight": 57,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3",
    "data": {
     "name": "IconButton photo"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "transparencyActive": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258_rollover.png",
    "iconURL": "skin/IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258.png",
    "width": 57,
    "paddingBottom": 0,
    "height": 57,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "maxHeight": 57,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258",
    "data": {
     "name": "IconButton video"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "transparencyActive": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "iconURL": "skin/IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E.png",
    "width": 57,
    "paddingBottom": 0,
    "height": 56,
    "mode": "toggle",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "maxHeight": 56,
    "propagateClick": false,
    "cursor": "hand",
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E",
    "data": {
     "name": "IconButton audio"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "pressedIconURL": "skin/IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E_pressed.png",
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C_rollover.png",
    "iconURL": "skin/IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C.png",
    "width": 57,
    "paddingBottom": 0,
    "height": 56,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "maxHeight": 57,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C",
    "data": {
     "name": "IconButton FB"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "transparencyActive": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   },
   {
    "paddingRight": 0,
    "rollOverIconURL": "skin/IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221_rollover.png",
    "iconURL": "skin/IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221.png",
    "width": 57,
    "paddingBottom": 0,
    "height": 57,
    "mode": "push",
    "verticalAlign": "middle",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "maxHeight": 57,
    "propagateClick": false,
    "cursor": "hand",
    "visible": false,
    "horizontalAlign": "center",
    "minHeight": 1,
    "id": "IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221",
    "data": {
     "name": "IconButton Twitter"
    },
    "borderSize": 0,
    "paddingLeft": 0,
    "class": "IconButton",
    "transparencyActive": false,
    "backgroundOpacity": 0,
    "borderRadius": 0,
    "minWidth": 1
   }
  ],
  "minWidth": 1
 },
 {
  "paddingRight": 0,
  "width": "100%",
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "verticalAlign": "middle",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C",
  "data": {
   "name": "-- INFO"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "horizontal",
  "class": "Container",
  "backgroundOpacity": 0,
  "left": "0%",
  "borderRadius": 0,
  "children": [
   {
    "children": [
     {
      "children": [
       {
        "paddingRight": 10,
        "width": "50.97%",
        "paddingBottom": 10,
        "height": "75.238%",
        "scrollBarColor": "#3399FF",
        "scrollBarWidth": 8,
        "paddingTop": 10,
        "shadow": false,
        "scrollBarMargin": 0,
        "scrollBarOpacity": 0.8,
        "propagateClick": false,
        "scrollBarVisible": "rollOver",
        "minHeight": 1,
        "id": "HTMLText_E1F7B3EC_C5AF_A41F_41E0_E2BA38FA4626",
        "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:35px;\"><B>House Info</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:25px;\"><B><I>Subtitle</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl lorem, condimentum nec pharetra ac, fringilla at quam. Nam gravida efficitur dui vitae auctor. Donec in ultricies orci, in sodales risus. Aliquam lacinia velit felis, vitae ullamcorper quam aliquam in. Phasellus vitae massa condimentum, tincidunt lacus a, faucibus lorem. Duis vitae rutrum dui. Aliquam erat volutpat. Integer bibendum maximus nulla eu ultrices. Nam sed dignissim risus. Mauris molestie libero ut imperdiet mattis. In eget nulla vel leo pharetra volutpat quis vel odio. Quisque tincidunt, dui sed egestas laoreet, augue tellus tincidunt ligula, eu consectetur dolor purus quis nisl. Morbi rhoncus vel magna malesuada dictum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Duis pretium, tortor sit amet mollis pharetra, dolor tellus mattis justo, at consequat purus enim eu velit. Duis cursus urna tellus.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">In nec urna eu urna tincidunt commodo nec quis dolor. Nulla consectetur, justo sed scelerisque congue, dolor ex pharetra velit, et dapibus lorem quam vel sapien. Cras justo dui, consequat et blandit at, consectetur in justo. Nulla posuere nulla libero, et tempus risus lobortis vitae. Nunc sed posuere diam. Phasellus non mauris lacus.</SPAN></SPAN></DIV></div>",
        "data": {
         "name": "HTMLText"
        },
        "class": "HTMLText",
        "paddingLeft": 10,
        "backgroundOpacity": 0,
        "borderRadius": 0,
        "borderSize": 0,
        "minWidth": 1
       },
       {
        "paddingRight": 0,
        "width": "32.825%",
        "paddingBottom": 0,
        "height": "56.429%",
        "verticalAlign": "middle",
        "url": "skin/Image_E1F7A3EC_C5AF_A41F_41B6_053480495D06.jpg",
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 237,
        "scaleMode": "fit_inside",
        "maxHeight": 237,
        "propagateClick": false,
        "horizontalAlign": "center",
        "minHeight": 1,
        "id": "Image_E1F7A3EC_C5AF_A41F_41B6_053480495D06",
        "data": {
         "name": "Image"
        },
        "borderSize": 0,
        "class": "Image",
        "paddingLeft": 0,
        "backgroundOpacity": 0,
        "borderRadius": 0,
        "minWidth": 1
       }
      ],
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "paddingBottom": 0,
      "height": "100%",
      "overflow": "scroll",
      "width": "100%",
      "scrollBarColor": "#000000",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "backgroundColorDirection": "vertical",
      "shadow": false,
      "scrollBarMargin": 2,
      "gap": 17,
      "contentOpaque": false,
      "backgroundColorRatios": [
       0
      ],
      "scrollBarOpacity": 0.5,
      "propagateClick": false,
      "scrollBarWidth": 10,
      "horizontalAlign": "center",
      "top": "0%",
      "creationPolicy": "delayed",
      "id": "Container_E1F783EC_C5AF_A41E_41B9_A87E2497FAAE",
      "data": {
       "name": "Container 1"
      },
      "minHeight": 1,
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "paddingLeft": 0,
      "layout": "horizontal",
      "class": "Container",
      "backgroundOpacity": 0.7,
      "left": "0%",
      "minWidth": 1,
      "borderRadius": 0
     },
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794_rollover.png",
      "iconURL": "skin/IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794.png",
      "width": 34,
      "paddingBottom": 0,
      "height": 34,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 34,
      "click": "this.setComponentVisibility(this.Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C, false, 0, null, null, false)",
      "maxHeight": 34,
      "propagateClick": false,
      "cursor": "hand",
      "top": 20,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794",
      "data": {
       "name": "X"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "right": 20,
      "borderRadius": 0
     }
    ],
    "backgroundColor": [
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "paddingBottom": 0,
    "height": "95%",
    "overflow": "scroll",
    "width": "95%",
    "scrollBarColor": "#000000",
    "verticalAlign": "top",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "maxHeight": 420,
    "maxWidth": 722,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "backgroundColorRatios": [
     0
    ],
    "shadow": false,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "scrollBarVisible": "rollOver",
    "minHeight": 1,
    "creationPolicy": "delayed",
    "id": "Container_E1F793EC_C5AF_A41E_41DE_B6A1C0172D80",
    "data": {
     "name": "Container global"
    },
    "borderSize": 0,
    "class": "Container",
    "paddingLeft": 0,
    "layout": "absolute",
    "backgroundOpacity": 0.3,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0
   }
  ],
  "minWidth": 1
 },
 {
  "children": [
   {
    "children": [
     {
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "toolTipFontColor": "#606060",
      "toolTipBorderSize": 1,
      "paddingRight": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarLeft": 0,
      "toolTipDisplayTime": 600,
      "playbackBarHeadHeight": 15,
      "transitionDuration": 500,
      "progressBorderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipPaddingRight": 6,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "progressBorderColor": "#000000",
      "transitionMode": "blending",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "toolTipOpacity": 1,
      "playbackBarHeight": 10,
      "class": "ViewerArea",
      "minHeight": 1,
      "paddingLeft": 0,
      "playbackBarHeadWidth": 6,
      "toolTipFontFamily": "Arial",
      "playbackBarRight": 0,
      "minWidth": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBorderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "toolTipBorderRadius": 3,
      "progressBarBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "height": "100%",
      "width": "100%",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0,
      "paddingTop": 0,
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "shadow": false,
      "progressLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressBottom": 2,
      "propagateClick": false,
      "progressHeight": 10,
      "top": "0%",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowColor": "#000000",
      "id": "ViewerAreaLabeled_E0A8C9D0_C5BB_E407_41CE_073D958CCF63",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "progressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "left": "0%",
      "toolTipPaddingBottom": 4,
      "playbackBarHeadShadow": true,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "playbackBarOpacity": 1,
      "borderRadius": 0,
      "progressBarOpacity": 1
     },
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09_rollover.png",
      "iconURL": "skin/IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09.png",
      "width": 34,
      "paddingBottom": 0,
      "height": 34,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 34,
      "click": "this.setComponentVisibility(this.Container_E0A829D0_C5BB_E407_41E3_334A63423D29, false, 0, null, null, false)",
      "maxHeight": 34,
      "propagateClick": false,
      "cursor": "hand",
      "top": 0,
      "horizontalAlign": "center",
      "minHeight": 1,
      "id": "IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09",
      "data": {
       "name": "X"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "class": "IconButton",
      "transparencyActive": true,
      "backgroundOpacity": 0,
      "minWidth": 1,
      "right": 0,
      "borderRadius": 0
     }
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 30,
    "paddingBottom": 30,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "verticalAlign": "top",
    "paddingTop": 30,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "top": "12%",
    "bottom": "12%",
    "id": "Container_E0A8D9D0_C5BB_E407_41DC_C8A6343CBB92",
    "data": {
     "name": "Container global"
    },
    "minHeight": 1,
    "paddingLeft": 30,
    "creationPolicy": "delayed",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "absolute",
    "class": "Container",
    "backgroundOpacity": 1,
    "left": "15%",
    "minWidth": 1,
    "right": "15%",
    "borderRadius": 0
   }
  ],
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "top",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_E0A829D0_C5BB_E407_41E3_334A63423D29",
  "data": {
   "name": "--- FLOORPLAN"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "absolute",
  "class": "Container",
  "backgroundOpacity": 0.7,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "children": [
   {
    "children": [
     {
      "toolTipPaddingLeft": 6,
      "progressBorderSize": 0,
      "toolTipFontColor": "#606060",
      "toolTipBorderSize": 1,
      "paddingRight": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "paddingBottom": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "playbackBarLeft": 0,
      "toolTipDisplayTime": 600,
      "playbackBarHeadHeight": 15,
      "transitionDuration": 500,
      "progressBorderRadius": 0,
      "toolTipBorderColor": "#767676",
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowOpacity": 1,
      "progressBarBorderColor": "#000000",
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipPaddingRight": 6,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "progressBorderColor": "#000000",
      "transitionMode": "blending",
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "toolTipFontWeight": "normal",
      "toolTipPaddingTop": 4,
      "toolTipOpacity": 1,
      "playbackBarHeight": 10,
      "class": "ViewerArea",
      "minHeight": 1,
      "paddingLeft": 0,
      "playbackBarHeadWidth": 6,
      "toolTipFontFamily": "Arial",
      "playbackBarRight": 0,
      "minWidth": 1,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "progressBarBorderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarProgressBorderRadius": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipTextShadowOpacity": 0,
      "toolTipBorderRadius": 3,
      "progressBarBorderRadius": 0,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "height": "100%",
      "width": "100%",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0,
      "paddingTop": 0,
      "toolTipFontSize": 12,
      "toolTipFontStyle": "normal",
      "shadow": false,
      "progressLeft": 0,
      "playbackBarHeadBorderSize": 0,
      "playbackBarProgressOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "playbackBarBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "progressBottom": 2,
      "propagateClick": false,
      "progressHeight": 10,
      "top": "0%",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowColor": "#000000",
      "id": "ViewerAreaLabeled_E9C4BE21_C598_FC06_41D4_4C90E452373D",
      "playbackBarHeadShadowColor": "#000000",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "borderSize": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "progressBarBackgroundColorDirection": "vertical",
      "progressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipShadowVerticalLength": 0,
      "left": "0%",
      "toolTipPaddingBottom": 4,
      "playbackBarHeadShadow": true,
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "playbackBarOpacity": 1,
      "borderRadius": 0,
      "progressBarOpacity": 1
     },
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343_rollover.png",
      "iconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343.png",
      "width": 150,
      "paddingBottom": 0,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 50,
      "maxHeight": 50,
      "propagateClick": false,
      "cursor": "hand",
      "top": "45.14%",
      "horizontalAlign": "center",
      "minHeight": 40,
      "bottom": "44.86%",
      "id": "IconButton_E9C48E21_C598_FC06_41D5_5911166B8343",
      "data": {
       "name": ">"
      },
      "borderSize": 0,
      "paddingLeft": 0,
      "class": "IconButton",
      "pressedIconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343_pressed.png",
      "backgroundOpacity": 0,
      "transparencyActive": true,
      "minWidth": 40,
      "right": "0.91%",
      "borderRadius": 0
     },
     {
      "paddingRight": 0,
      "rollOverIconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507_rollover.png",
      "iconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507.png",
      "width": 150,
      "paddingBottom": 0,
      "mode": "push",
      "verticalAlign": "middle",
      "paddingTop": 0,
      "shadow": false,
      "maxWidth": 50,
      "maxHeight": 50,
      "propagateClick": false,
      "cursor": "hand",
      "top": "45%",
      "horizontalAlign": "center",
      "bottom": "45%",
      "id": "IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507",
      "data": {
       "name": "<"
      },
      "minHeight": 40,
      "paddingLeft": 0,
      "borderSize": 0,
      "pressedIconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507_pressed.png",
      "class": "IconButton",
      "backgroundOpacity": 0,
      "left": "1%",
      "transparencyActive": true,
      "minWidth": 40,
      "borderRadius": 0
     },
     "this.IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A"
    ],
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "paddingRight": 0,
    "paddingBottom": 0,
    "overflow": "scroll",
    "scrollBarColor": "#000000",
    "verticalAlign": "top",
    "paddingTop": 0,
    "backgroundColorDirection": "vertical",
    "shadow": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "contentOpaque": false,
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarOpacity": 0.5,
    "propagateClick": false,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "top": "12%",
    "bottom": "12%",
    "id": "Container_E9C4AE21_C598_FC06_41BB_4CE2E02053A5",
    "data": {
     "name": "Global"
    },
    "minHeight": 1,
    "paddingLeft": 0,
    "creationPolicy": "delayed",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "layout": "absolute",
    "class": "Container",
    "backgroundOpacity": 1,
    "left": "16%",
    "minWidth": 1,
    "right": "16%",
    "borderRadius": 0
   }
  ],
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "paddingBottom": 0,
  "height": "100%",
  "overflow": "scroll",
  "width": "100%",
  "verticalAlign": "top",
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "backgroundColorDirection": "vertical",
  "shadow": false,
  "scrollBarMargin": 2,
  "gap": 10,
  "contentOpaque": false,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarOpacity": 0.5,
  "propagateClick": false,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "visible": false,
  "top": "0%",
  "creationPolicy": "delayed",
  "id": "Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "paddingLeft": 0,
  "layout": "absolute",
  "class": "Container",
  "backgroundOpacity": 0.8,
  "left": "0%",
  "minWidth": 1,
  "borderRadius": 0
 },
 {
  "paddingRight": 0,
  "width": "28.336%",
  "paddingBottom": 0,
  "height": "8.523%",
  "verticalAlign": "middle",
  "url": "skin/Image_5671619A_5839_172D_41D4_B9821C748878.png",
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 361,
  "scaleMode": "fit_inside",
  "maxHeight": 60,
  "propagateClick": false,
  "horizontalAlign": "center",
  "visible": false,
  "top": "13.1%",
  "id": "Image_5671619A_5839_172D_41D4_B9821C748878",
  "data": {
   "name": "Image3274"
  },
  "minHeight": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "class": "Image",
  "backgroundOpacity": 0,
  "left": "6.94%",
  "borderRadius": 0,
  "minWidth": 1
 }
], 
 "paddingRight": 0,
 "paddingBottom": 0,
 "height": "100%",
 "overflow": "visible",
 "width": "100%",
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "paddingTop": 0,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "scrollBarMargin": 2,
 "gap": 10,
 "contentOpaque": false,
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "buttonToggleFullscreen": "this.IconButton_5B7E71AC_5712_EB49_41B2_5B0060EAAFC7",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "creationPolicy": "delayed",
 "id": "rootPlayer",
 "data": {
  "name": "Player448"
 },
 "borderSize": 0,
 "class": "Player",
 "paddingLeft": 0,
 "vrPolyfillScale": 1,
 "mobileMipmappingEnabled": false,
 "borderRadius": 0,
 "layout": "absolute",
 "start": "this.syncPlaylists([this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_5B7E71AC_5712_EB49_41B2_5B0060EAAFC7].forEach(function(component) { component.set('visible', false); }) }",
 "scripts": {
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "existsKey": function(key){  return key in window; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } }
 },
 "minWidth": 20,
 "mouseWheelEnabled": true
})