TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_5C47D387_5217_4352_41B1_81BBDB4A44BC",
      "bleaching": 0.4,
      "bleachingDistance": 0.5,
      "yaw": -79.52,
      "pitch": 45.52
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0",
      "hfov": 48,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 132,
  "id": "panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D",
  "thumbnailUrl": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_t.jpg",
  "audios": [
   {
    "data": {
     "label": "bensound-birthofahero"
    },
    "class": "PanoramaAudio",
    "id": "audio_68FDFCDE_641D_38D3_41D5_3195B7058BA7",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_68FDFCDE_641D_38D3_41D5_3195B7058BA7.mp3",
     "oggUrl": "media/audio_68FDFCDE_641D_38D3_41D5_3195B7058BA7.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0827_360_200714221436_360_equi",
  "class": "Panorama",
  "cardboardMenu": {
   "class": "Menu",
   "fontFamily": "Arial",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "selectedBackgroundColor": "#202020",
   "rollOverBackgroundColor": "#000000",
   "id": "Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
   "rollOverOpacity": 0.8,
   "opacity": 0.4,
   "children": [
    {
     "label": "YIVR_Stitch_0827_360_200714221436_360_equi",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "label": "YIVR_Stitch_0835_360_200714222508_360",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "label": "YIVR_Stitch_0850_360_200714224029_360",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "label": "YIVR_Stitch_0856_360_200714223957_360",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "label": "YIVR_Stitch_0864_360_200714223621_360",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "label": "YIVR_Stitch_0874_360_200714223342_360",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "label": "YIVR_Stitch_0904_360_200714224117_360",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "label": "YIVR_Stitch_0900_360_200714224634_360_equi",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "label": "YIVR_Stitch_0896_360_200714230732_360_equi",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "label": "YIVR_Stitch_0890_360_200714230921_360_equi",
     "class": "MenuItem",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    }
   ],
   "selectedFontColor": "#FFFFFF"
  },
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "buttonCardboardView": {
   "propagateClick": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "mode": "push",
   "width": 49,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "paddingBottom": 0,
   "maxHeight": 36,
   "paddingTop": 0,
   "maxWidth": 49,
   "borderRadius": 0,
   "height": 36,
   "shadow": false,
   "backgroundOpacity": 0,
   "transparencyActive": false,
   "cursor": "hand",
   "minHeight": 1,
   "id": "IconButton_EC147732_E24F_68F6_41E6_5D380AA33370",
   "data": {
    "name": "IconButton11832"
   },
   "iconURL": "skin/IconButton_EC147732_E24F_68F6_41E6_5D380AA33370.png",
   "paddingLeft": 0,
   "minWidth": 1,
   "class": "IconButton"
  },
  "viewerArea": "this.MainViewer",
  "buttonPause": {
   "propagateClick": false,
   "horizontalAlign": "center",
   "borderSize": 0,
   "mode": "push",
   "width": 34,
   "paddingRight": 0,
   "verticalAlign": "middle",
   "height": 34,
   "maxHeight": 34,
   "paddingTop": 0,
   "rollOverIconURL": "skin/IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A_rollover.png",
   "shadow": false,
   "maxWidth": 34,
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "top": 20,
   "click": "this.setComponentVisibility(this.Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE, false, 0, null, null, false)",
   "transparencyActive": true,
   "cursor": "hand",
   "borderRadius": 0,
   "minHeight": 30,
   "id": "IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A",
   "data": {
    "name": "X"
   },
   "iconURL": "skin/IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A.png",
   "paddingLeft": 0,
   "minWidth": 30,
   "class": "IconButton",
   "right": 20
  },
  "mouseControlMode": "drag_acceleration"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 11.67
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 11.67
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 11.67
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.3,
   "hfov": 127,
   "pitch": 5.4
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_5F044448_4F1D_5EDC_41A6_283C2D55E0C2",
      "bleaching": 0.41,
      "bleachingDistance": 0.47,
      "yaw": 75.33,
      "pitch": 43.33
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_tcap0",
      "hfov": 45,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C",
  "thumbnailUrl": "media/panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_t.jpg",
  "audios": [
   {
    "data": {
     "label": "528353_1648170-lq (online-audio-converter.com)"
    },
    "class": "PanoramaAudio",
    "id": "audio_74ED8584_666B_D5F1_41D7_504B50B9FA14",
    "loop": true,
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_74ED8584_666B_D5F1_41D7_504B50B9FA14.mp3",
     "oggUrl": "media/audio_74ED8584_666B_D5F1_41D7_504B50B9FA14.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0835_360_200714222508_360",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_40470879_4F05_56BC_41A5_3CCCE6514F3C_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 10.08
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 10.08
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 10.08
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.83,
   "hfov": 122,
   "pitch": 2.02
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_41E8A472_4F1B_DECF_41D2_5E986685AD5F",
      "bleaching": 0.59,
      "bleachingDistance": 0.4,
      "yaw": -9.78,
      "pitch": 41.68
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_tcap0",
      "hfov": 45,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66",
  "thumbnailUrl": "media/panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_SSFX Countryside 3"
    },
    "class": "PanoramaAudio",
    "id": "audio_EC7B7BBA_E27B_1FF1_41E2_001FF3694E0C",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_EC7B7BBA_E27B_1FF1_41E2_001FF3694E0C.mp3",
     "oggUrl": "media/audio_EC7B7BBA_E27B_1FF1_41E2_001FF3694E0C.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0850_360_200714224029_360",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 10.61
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 10.61
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 10.61
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -9.95,
   "hfov": 122,
   "pitch": 5.19
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_tcap0",
      "hfov": 45,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3",
  "thumbnailUrl": "media/panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_Lake Pier Small Waves"
    },
    "class": "PanoramaAudio",
    "id": "audio_EC26E741_E279_2893_41E7_3DE9B810A104",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_EC26E741_E279_2893_41E7_3DE9B810A104.mp3",
     "oggUrl": "media/audio_EC26E741_E279_2893_41E7_3DE9B810A104.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0856_360_200714223957_360",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 10.61
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "yawSpeed": 10.61
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 10.61
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_5F38AB98_4F0F_AA7C_41BF_5BB9248F15A3",
      "bleaching": 0.5,
      "bleachingDistance": 0.62,
      "yaw": 63.52,
      "pitch": 34.54
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_tcap0",
      "hfov": 45,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765",
  "thumbnailUrl": "media/panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_Outdoor Market Summer Ambience With Swedish Voices"
    },
    "class": "PanoramaAudio",
    "id": "audio_ED6D3ADF_E24B_19AE_41EB_EA94AD6D1DA9",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_ED6D3ADF_E24B_19AE_41EB_EA94AD6D1DA9.mp3",
     "oggUrl": "media/audio_ED6D3ADF_E24B_19AE_41EB_EA94AD6D1DA9.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0864_360_200714223621_360",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 10.08
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -323,
     "yawSpeed": 10.08
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": -18.5,
     "yawSpeed": 10.08
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 114.31,
   "hfov": 121,
   "pitch": -10.47
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_5F1CEEA2_4F1A_EA4C_41CE_353ECD5CE71B",
      "bleaching": 0.35,
      "bleachingDistance": 0.55,
      "yaw": -141.56,
      "pitch": 36.74
     },
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_tcap0",
      "hfov": 48,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0",
  "thumbnailUrl": "media/panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0874_360_200714223342_360",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5EB58C97_4F0B_6E74_41D2_61D28EADDEB0_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 9.55
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 9.55
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 9.55
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_tcap0",
      "hfov": 48,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1",
  "thumbnailUrl": "media/panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0904_360_200714224117_360",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5ECE4D3A_4F0A_EEBC_41C7_75D13EE40CD1_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 10.61
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 10.61
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 10.61
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "hfov": 123,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5D84AC1D_52A8_9506_41BB_A8544597C948.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_tcap0",
      "hfov": 48,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 130,
  "id": "panorama_5D84AC1D_52A8_9506_41BB_A8544597C948",
  "thumbnailUrl": "media/panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_t.jpg",
  "audios": [
   {
    "data": {
     "label": "Back to the Green Hall"
    },
    "class": "PanoramaAudio",
    "id": "audio_F2BDA1BF_E249_6BEF_41C9_6EB85D528F18",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_F2BDA1BF_E249_6BEF_41C9_6EB85D528F18.mp3",
     "oggUrl": "media/audio_F2BDA1BF_E249_6BEF_41C9_6EB85D528F18.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0900_360_200714224634_360_equi",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5D84AC1D_52A8_9506_41BB_A8544597C948_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.54,
   "hfov": 121,
   "pitch": -19.25
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_tcap0",
      "hfov": 48,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 137,
  "id": "panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3",
  "thumbnailUrl": "media/panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_t.jpg",
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0896_360_200714230732_360_equi",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_5EB494D0_5268_951E_41B6_78B71E0B05B3_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -42.17,
   "hfov": 135,
   "pitch": 13.15
  }
 },
 {
  "frames": [
   {
    "sphere": {
     "levels": [
      {
       "height": 2880,
       "width": 5760,
       "url": "media/panorama_43E8831A_53AC_8310_41D2_893D179D6367_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_43E8831A_53AC_8310_41D2_893D179D6367.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_43E8831A_53AC_8310_41D2_893D179D6367_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_43E8831A_53AC_8310_41D2_893D179D6367_tcap0",
      "hfov": 48,
      "rotate": false,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 131,
  "id": "panorama_43E8831A_53AC_8310_41D2_893D179D6367",
  "thumbnailUrl": "media/panorama_43E8831A_53AC_8310_41D2_893D179D6367_t.jpg",
  "audios": [
   {
    "data": {
     "label": "ES_King's Chamber"
    },
    "class": "PanoramaAudio",
    "id": "audio_EC3DE121_E24B_6893_41E9_5D6B61ADABCA",
    "autoplay": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_EC3DE121_E24B_6893_41E9_5D6B61ADABCA.mp3",
     "oggUrl": "media/audio_EC3DE121_E24B_6893_41E9_5D6B61ADABCA.ogg"
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "partial": false,
  "label": "YIVR_Stitch_0890_360_200714230921_360_equi",
  "class": "Panorama",
  "cardboardMenu": "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
  "hfov": 360,
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_43E8831A_53AC_8310_41D2_893D179D6367_camera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ]
  },
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 141.53,
   "hfov": 125,
   "pitch": 0.12
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5CC4B852_5214_CDF2_41C8_6F78BCDF869D",
    "end": "this.setComponentVisibility(this.HTMLText_6AFF6A12_6624_BF11_41D7_00E912F21293, false, -1, this.effect_773EADFF_663C_550F_41C9_D8955E16BDD0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_6AFF6A12_6624_BF11_41D7_00E912F21293, false, -1, this.effect_773EADFF_663C_550F_41C9_D8955E16BDD0, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.setComponentVisibility(this.HTMLText_6AFF6A12_6624_BF11_41D7_00E912F21293, true, -1, this.effect_773EBDFF_663C_550F_41C4_FF56986CB89F, 'showEffect', false)",
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
    "end": "this.setComponentVisibility(this.HTMLText_F77434A0_E701_50AB_41E4_EA218E93C02A, false, -1, this.effect_F47D1AC5_E701_50EA_41D2_28ECBB0F662B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_F77434A0_E701_50AB_41E4_EA218E93C02A, false, -1, this.effect_F47D1AC5_E701_50EA_41D2_28ECBB0F662B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.setComponentVisibility(this.HTMLText_F77434A0_E701_50AB_41E4_EA218E93C02A, true, -1, this.effect_F47DCAC5_E701_50EA_41AC_C9589F370204, 'showEffect', false)",
    "camera": "this.panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3",
    "end": "this.setComponentVisibility(this.HTMLText_E8B870A7_E703_50B6_41D6_47A4A991A025, false, -1, this.effect_F6C62E48_E70F_53FA_41E2_AF8FC6AAC997, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E8B870A7_E703_50B6_41D6_47A4A991A025, false, -1, this.effect_F6C62E48_E70F_53FA_41E2_AF8FC6AAC997, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.setComponentVisibility(this.HTMLText_E8B870A7_E703_50B6_41D6_47A4A991A025, true, -1, this.effect_F6C63E48_E70F_53FA_41E0_D07D278E7CBF, 'showEffect', false)",
    "camera": "this.panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765",
    "end": "this.setComponentVisibility(this.HTMLText_F709B4D1_E703_30EA_41E1_0AE9D5915F61, false, -1, this.effect_F6C6FE48_E70F_53FA_41C4_1816203D1B87, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_F709B4D1_E703_30EA_41E1_0AE9D5915F61, false, -1, this.effect_F6C6FE48_E70F_53FA_41C4_1816203D1B87, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.setComponentVisibility(this.HTMLText_F709B4D1_E703_30EA_41E1_0AE9D5915F61, true, -1, this.effect_F6C68E48_E70F_53FA_41E8_A1DD4DC30635, 'showEffect', false)",
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
    "end": "this.setComponentVisibility(this.HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1, false, -1, this.effect_E974F057_E703_EF96_41D2_E4615B0F373B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1, false, -1, this.effect_E974F057_E703_EF96_41D2_E4615B0F373B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.setComponentVisibility(this.HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1, true, -1, this.effect_E974E057_E703_EF96_41BF_280BC1199D46, 'showEffect', false)",
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
    "end": "this.setComponentVisibility(this.HTMLText_76D5487C_662C_5B11_41D9_57D95BE1ECAA, false, -1, this.effect_76097AB5_6624_BF13_41C7_9392ED64F5A6, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_76D5487C_662C_5B11_41D9_57D95BE1ECAA, false, -1, this.effect_76097AB5_6624_BF13_41C7_9392ED64F5A6, 'hideEffect', false); this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0); this.setComponentVisibility(this.HTMLText_76D5487C_662C_5B11_41D9_57D95BE1ECAA, true, -1, this.effect_76096AB5_6624_BF13_41D2_0441B5DC88D6, 'showEffect', false)",
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
    "end": "this.setComponentVisibility(this.HTMLText_6AFF6A12_6624_BF11_41D7_00E912F21293, false, -1, this.effect_773EADFF_663C_550F_41C9_D8955E16BDD0, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_6AFF6A12_6624_BF11_41D7_00E912F21293, false, -1, this.effect_773EADFF_663C_550F_41C9_D8955E16BDD0, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 0, 1); this.setComponentVisibility(this.HTMLText_6AFF6A12_6624_BF11_41D7_00E912F21293, true, -1, this.effect_773EBDFF_663C_550F_41C4_FF56986CB89F, 'showEffect', false)",
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
    "end": "this.setComponentVisibility(this.HTMLText_F77434A0_E701_50AB_41E4_EA218E93C02A, false, -1, this.effect_F47D1AC5_E701_50EA_41D2_28ECBB0F662B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_F77434A0_E701_50AB_41E4_EA218E93C02A, false, -1, this.effect_F47D1AC5_E701_50EA_41D2_28ECBB0F662B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 2, 3); this.setComponentVisibility(this.HTMLText_F77434A0_E701_50AB_41E4_EA218E93C02A, true, -1, this.effect_F47DCAC5_E701_50EA_41AC_C9589F370204, 'showEffect', false)",
    "camera": "this.panorama_4001EDF1_4F1A_A9CC_41C1_3D0A860A5F66_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3",
    "end": "this.setComponentVisibility(this.HTMLText_E8B870A7_E703_50B6_41D6_47A4A991A025, false, -1, this.effect_F6C62E48_E70F_53FA_41E2_AF8FC6AAC997, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_E8B870A7_E703_50B6_41D6_47A4A991A025, false, -1, this.effect_F6C62E48_E70F_53FA_41E2_AF8FC6AAC997, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 3, 4); this.setComponentVisibility(this.HTMLText_E8B870A7_E703_50B6_41D6_47A4A991A025, true, -1, this.effect_F6C63E48_E70F_53FA_41E0_D07D278E7CBF, 'showEffect', false)",
    "camera": "this.panorama_5E001A96_4F0A_EA74_41BB_13FE656CCAB3_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_405B0B44_4F0A_AAD4_41C6_A14B14E60765",
    "end": "this.setComponentVisibility(this.HTMLText_F709B4D1_E703_30EA_41E1_0AE9D5915F61, false, -1, this.effect_F6C6FE48_E70F_53FA_41C4_1816203D1B87, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_F709B4D1_E703_30EA_41E1_0AE9D5915F61, false, -1, this.effect_F6C6FE48_E70F_53FA_41C4_1816203D1B87, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 4, 5); this.setComponentVisibility(this.HTMLText_F709B4D1_E703_30EA_41E1_0AE9D5915F61, true, -1, this.effect_F6C68E48_E70F_53FA_41E8_A1DD4DC30635, 'showEffect', false)",
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
    "end": "this.setComponentVisibility(this.HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1, false, -1, this.effect_E974F057_E703_EF96_41D2_E4615B0F373B, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1, false, -1, this.effect_E974F057_E703_EF96_41D2_E4615B0F373B, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 6, 7); this.setComponentVisibility(this.HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1, true, -1, this.effect_E974E057_E703_EF96_41BF_280BC1199D46, 'showEffect', false)",
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
    "end": "this.setComponentVisibility(this.HTMLText_76D5487C_662C_5B11_41D9_57D95BE1ECAA, false, -1, this.effect_76097AB5_6624_BF13_41C7_9392ED64F5A6, 'hideEffect', false); this.setComponentVisibility(this.HTMLText_76D5487C_662C_5B11_41D9_57D95BE1ECAA, false, -1, this.effect_76097AB5_6624_BF13_41C7_9392ED64F5A6, 'hideEffect', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist, 9, 0); this.setComponentVisibility(this.HTMLText_76D5487C_662C_5B11_41D9_57D95BE1ECAA, true, -1, this.effect_76096AB5_6624_BF13_41D2_0441B5DC88D6, 'showEffect', false)",
    "camera": "this.panorama_43E8831A_53AC_8310_41D2_893D179D6367_camera"
   }
  ]
 },
 "this.Menu_F638B022_E701_6FAF_41DC_40C39800BE51",
 {
  "easing": "linear",
  "duration": 400,
  "id": "effect_F72E3853_E701_7FEE_41E6_130F3C5B8315",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_76979B28_662B_DD31_41A5_83A2CCCCCD50",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_7605A045_662C_AB73_41C5_E2AE07267771",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_F6277EDC_E701_509A_41CB_E2F6CCC71352",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_F70D17ED_E70E_D0B5_41D4_1DF55FF430EA",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_F7D78EBC_E701_509B_41EC_8212EC4A75BA",
  "class": "FadeOutEffect"
 },
 {
  "easing": "linear",
  "duration": 1000,
  "id": "effect_F7C2244B_E706_D7FE_41DE_79C949DF546B",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_773EBDFF_663C_550F_41C4_FF56986CB89F",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_773EADFF_663C_550F_41C9_D8955E16BDD0",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_F47DCAC5_E701_50EA_41AC_C9589F370204",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_F47D1AC5_E701_50EA_41D2_28ECBB0F662B",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_F6C63E48_E70F_53FA_41E0_D07D278E7CBF",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_F6C62E48_E70F_53FA_41E2_AF8FC6AAC997",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_F6C68E48_E70F_53FA_41E8_A1DD4DC30635",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_F6C6FE48_E70F_53FA_41C4_1816203D1B87",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_E974E057_E703_EF96_41BF_280BC1199D46",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_E974F057_E703_EF96_41D2_E4615B0F373B",
  "class": "FadeOutEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_76096AB5_6624_BF13_41D2_0441B5DC88D6",
  "class": "FadeInEffect"
 },
 {
  "easing": "cubic_in_out",
  "duration": 1000,
  "id": "effect_76097AB5_6624_BF13_41C7_9392ED64F5A6",
  "class": "FadeOutEffect"
 },
 "this.effect_773EBDFF_663C_550F_41C4_FF56986CB89F",
 "this.effect_773EADFF_663C_550F_41C9_D8955E16BDD0",
 "this.effect_F47DCAC5_E701_50EA_41AC_C9589F370204",
 "this.effect_F47D1AC5_E701_50EA_41D2_28ECBB0F662B",
 "this.effect_F6C63E48_E70F_53FA_41E0_D07D278E7CBF",
 "this.effect_F6C62E48_E70F_53FA_41E2_AF8FC6AAC997",
 "this.effect_F6C68E48_E70F_53FA_41E8_A1DD4DC30635",
 "this.effect_F6C6FE48_E70F_53FA_41C4_1816203D1B87",
 "this.effect_E974E057_E703_EF96_41BF_280BC1199D46",
 "this.effect_E974F057_E703_EF96_41D2_E4615B0F373B",
 "this.effect_76096AB5_6624_BF13_41D2_0441B5DC88D6",
 "this.effect_76097AB5_6624_BF13_41C7_9392ED64F5A6",
 "this.audio_68FDFCDE_641D_38D3_41D5_3195B7058BA7",
 "this.audio_74ED8584_666B_D5F1_41D7_504B50B9FA14",
 "this.audio_EC7B7BBA_E27B_1FF1_41E2_001FF3694E0C",
 "this.audio_EC26E741_E279_2893_41E7_3DE9B810A104",
 "this.audio_ED6D3ADF_E24B_19AE_41EB_EA94AD6D1DA9",
 "this.audio_EC3DE121_E24B_6893_41E9_5D6B61ADABCA",
 "this.audio_F2BDA1BF_E249_6BEF_41C9_6EB85D528F18"
], "children": [
 {
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowColor": "#333333",
  "progressBarBorderColor": "#000000",
  "playbackBarBottom": 5,
  "toolTipPaddingBottom": 4,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderColor": "#000000",
  "paddingTop": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "borderRadius": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionMode": "blending",
  "minHeight": 50,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "toolTipShadowOpacity": 1,
  "minWidth": 100,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 600,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "progressBarBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipOpacity": 1,
  "playbackBarProgressBorderColor": "#000000",
  "borderSize": 0,
  "playbackBarHeadBorderColor": "#000000",
  "width": "100%",
  "toolTipFontColor": "#606060",
  "toolTipBorderColor": "#767676",
  "paddingRight": 0,
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipPaddingRight": 6,
  "playbackBarProgressOpacity": 1,
  "paddingBottom": 0,
  "progressLeft": 0,
  "playbackBarBorderSize": 0,
  "shadow": false,
  "playbackBarBackgroundOpacity": 1,
  "toolTipFontFamily": "Arial",
  "progressBottom": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressHeight": 10,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "click": "this.setComponentVisibility(this.HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1, false, 0, this.effect_F72E3853_E701_7FEE_41E6_130F3C5B8315, 'hideEffect', false)",
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowColor": "#000000",
  "top": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressRight": 0,
  "toolTipTextShadowOpacity": 0,
  "bottom": "0%",
  "playbackBarHeadShadowOpacity": 0.7,
  "id": "MainViewer",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "progressOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "paddingLeft": 0,
  "toolTipFontStyle": "normal",
  "progressBarOpacity": 1,
  "toolTipFontSize": 12,
  "class": "ViewerArea",
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBorderSize": 0,
  "playbackBarOpacity": 1,
  "playbackBarLeft": 0,
  "propagateClick": false,
  "left": 0,
  "toolTipFontWeight": "normal"
 },
 {
  "propagateClick": false,
  "horizontalAlign": "left",
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "url": "skin/Image_38AE0033_3506_F021_416B_4DF12FECDFC8.png",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "maxHeight": 271,
  "paddingTop": 0,
  "shadow": false,
  "maxWidth": 1920,
  "scaleMode": "fill",
  "borderRadius": 0,
  "height": "29.71%",
  "backgroundOpacity": 0,
  "top": 0,
  "visible": false,
  "minHeight": 1,
  "id": "Image_38AE0033_3506_F021_416B_4DF12FECDFC8",
  "data": {
   "name": "white stripe"
  },
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "Image",
  "left": 0
 },
 {
  "propagateClick": false,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "width": "100%",
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "height": "32%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": 0,
  "visible": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "id": "Container_32774EFE_3505_5022_41AB_699D4C74C8C0",
  "data": {
   "name": "- UPPER BUTTON SET"
  },
  "contentOpaque": false,
  "gap": 10,
  "layout": "absolute",
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "Container",
  "left": 0,
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "propagateClick": false,
    "scrollBarMargin": 2,
    "borderSize": 0,
    "width": 498,
    "paddingRight": 10,
    "height": 98,
    "shadow": false,
    "paddingBottom": 10,
    "paddingTop": 10,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "backgroundOpacity": 0,
    "top": 31,
    "scrollBarColor": "#000000",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:33px;font-family:'Arial Black', Gadget, sans-serif;\"><B>COMPANY</B></SPAN><SPAN STYLE=\"font-size:33px;\">LOGO</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:21px;\">www.company.com</SPAN></SPAN></DIV></div>",
    "minHeight": 1,
    "id": "HTMLText_3D347B78_3503_302E_41BA_D209C34F0BE6",
    "data": {
     "name": "Company logo"
    },
    "scrollBarVisible": "rollOver",
    "paddingLeft": 10,
    "minWidth": 1,
    "class": "HTMLText",
    "left": 36.24
   },
   {
    "horizontalAlign": "right",
    "propagateClick": false,
    "borderSize": 0,
    "width": 796,
    "scrollBarMargin": 2,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "verticalAlign": "middle",
    "height": 70.95,
    "shadow": false,
    "paddingBottom": 0,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "backgroundOpacity": 0,
    "top": 0,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_3D9A43EF_350D_5021_41B3_B4C8121813DC",
    "gap": 9,
    "data": {
     "name": "Container button set"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "Container",
    "right": 29,
    "children": [
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontColor": "#666666",
      "borderSize": 0,
      "fontSize": 15,
      "mode": "push",
      "width": 100,
      "paddingRight": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "paddingTop": 0,
      "shadowBlurRadius": 6,
      "borderRadius": 0,
      "height": 44,
      "backgroundOpacity": 0,
      "fontWeight": "bold",
      "cursor": "hand",
      "borderColor": "#000000",
      "iconWidth": 32,
      "minHeight": 1,
      "id": "Button_3D99702F_350D_5022_41C3_F32EBDE4AC3A",
      "gap": 5,
      "shadowSpread": 1,
      "data": {
       "name": "Button 1"
      },
      "iconBeforeLabel": true,
      "shadowColor": "#000000",
      "iconHeight": 32,
      "layout": "horizontal",
      "rollOverFontColor": "#333333",
      "paddingLeft": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "label": "BUTTON 1",
      "class": "Button"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontColor": "#666666",
      "borderSize": 0,
      "fontSize": 15,
      "mode": "push",
      "width": 100,
      "paddingRight": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "paddingTop": 0,
      "shadowBlurRadius": 6,
      "borderRadius": 0,
      "height": 44,
      "backgroundOpacity": 0,
      "fontWeight": "bold",
      "cursor": "hand",
      "borderColor": "#000000",
      "iconWidth": 32,
      "minHeight": 1,
      "id": "Button_3C071467_3505_5021_41C0_9CD078438C82",
      "gap": 5,
      "shadowSpread": 1,
      "data": {
       "name": "Button 2"
      },
      "iconBeforeLabel": true,
      "shadowColor": "#000000",
      "iconHeight": 32,
      "layout": "horizontal",
      "rollOverFontColor": "#333333",
      "paddingLeft": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "label": "BUTTON 2",
      "class": "Button"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontColor": "#666666",
      "borderSize": 0,
      "fontSize": 15,
      "mode": "push",
      "width": 100,
      "paddingRight": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "paddingTop": 0,
      "shadowBlurRadius": 6,
      "borderRadius": 0,
      "height": 44,
      "backgroundOpacity": 0,
      "fontWeight": "bold",
      "cursor": "hand",
      "borderColor": "#000000",
      "iconWidth": 32,
      "minHeight": 1,
      "id": "Button_3C5B5026_3507_7023_418D_5AEF13450F0A",
      "gap": 5,
      "shadowSpread": 1,
      "data": {
       "name": "Button 3"
      },
      "iconBeforeLabel": true,
      "shadowColor": "#000000",
      "iconHeight": 32,
      "layout": "horizontal",
      "rollOverFontColor": "#333333",
      "paddingLeft": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "label": "BUTTON 3",
      "class": "Button"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#000000",
       "#000000"
      ],
      "fontColor": "#666666",
      "borderSize": 0,
      "fontSize": 15,
      "mode": "push",
      "width": 100,
      "paddingRight": 0,
      "textDecoration": "none",
      "fontFamily": "Arial",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "fontStyle": "normal",
      "backgroundColorRatios": [
       0,
       1
      ],
      "shadow": false,
      "paddingTop": 0,
      "shadowBlurRadius": 6,
      "borderRadius": 0,
      "height": 44,
      "backgroundOpacity": 0,
      "fontWeight": "bold",
      "cursor": "hand",
      "borderColor": "#000000",
      "iconWidth": 32,
      "minHeight": 1,
      "id": "Button_3C6B7BF5_3505_5021_41B1_F65D95672705",
      "gap": 5,
      "shadowSpread": 1,
      "data": {
       "name": "Button 4"
      },
      "iconBeforeLabel": true,
      "shadowColor": "#000000",
      "iconHeight": 32,
      "layout": "horizontal",
      "rollOverFontColor": "#333333",
      "paddingLeft": 0,
      "minWidth": 1,
      "backgroundColorDirection": "vertical",
      "label": "BUTTON 4",
      "class": "Button"
     }
    ]
   }
  ]
 },
 {
  "backgroundColor": [
   "#FFFFFF"
  ],
  "propagateClick": false,
  "rollOverItemBackgroundColorRatios": [],
  "itemThumbnailShadowHorizontalLength": 0,
  "itemLabelFontStyle": "normal",
  "itemThumbnailShadowColor": "#000000",
  "itemThumbnailShadowSpread": 1,
  "itemLabelHorizontalAlign": "center",
  "itemMode": "thumbnail-only",
  "itemThumbnailBorderRadius": 0,
  "paddingTop": 16,
  "itemThumbnailWidth": 100,
  "itemPaddingRight": 3,
  "scrollBarVisible": "rollOver",
  "itemPaddingTop": 3,
  "itemThumbnailHeight": 68,
  "playList": "this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist",
  "borderRadius": 0,
  "itemBorderSize": 0,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "itemLabelGap": 5,
  "rollOverItemBackgroundColor": [],
  "itemOpacity": 1,
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailShadowVerticalLength": 0,
  "rollOverItemBorderSize": 0,
  "layout": "horizontal",
  "itemHorizontalAlign": "center",
  "gap": 10,
  "itemLabelFontFamily": "Arial",
  "itemThumbnailShadow": true,
  "itemBorderRadius": 0,
  "minWidth": 1,
  "itemPaddingBottom": 3,
  "itemPaddingLeft": 3,
  "rollOverItemThumbnailShadowBlurRadius": 10,
  "rollOverItemBorderRadius": 0,
  "horizontalAlign": "left",
  "scrollBarMargin": 2,
  "itemVerticalAlign": "middle",
  "width": "100%",
  "borderSize": 0,
  "itemBackgroundColor": [],
  "itemThumbnailOpacity": 1,
  "scrollBarWidth": 5,
  "paddingRight": 20,
  "backgroundColorRatios": [
   0
  ],
  "verticalAlign": "top",
  "paddingBottom": 10,
  "shadow": false,
  "itemBackgroundColorRatios": [],
  "scrollBarOpacity": 0.5,
  "itemLabelPosition": "bottom",
  "itemLabelTextDecoration": "none",
  "rollOverItemThumbnailShadowOpacity": 1,
  "backgroundOpacity": 0.3,
  "itemThumbnailShadowBlurRadius": 5,
  "bottom": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "id": "ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8",
  "itemBackgroundOpacity": 0,
  "data": {
   "name": "ThumbnailList"
  },
  "itemBackgroundColorDirection": "vertical",
  "class": "ThumbnailList",
  "paddingLeft": 20,
  "itemLabelFontWeight": "normal",
  "backgroundColorDirection": "vertical",
  "itemLabelFontSize": 14,
  "itemThumbnailShadowOpacity": 0.3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBorderColor": "#FFFFFF",
  "left": "0%"
 },
 {
  "propagateClick": false,
  "horizontalAlign": "center",
  "borderSize": 0,
  "width": 85,
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": "5%",
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "bottom": "5%",
  "id": "Container_3FEB359B_3662_45B1_41A1_0A030760AA1D",
  "gap": 0,
  "data": {
   "name": "- RIGHT BUTTON SET"
  },
  "contentOpaque": false,
  "scrollBarVisible": "rollOver",
  "layout": "vertical",
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "Container",
  "right": 0,
  "children": [
   {
    "propagateClick": false,
    "toolTipBorderRadius": 3,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "toggle",
    "toolTipOpacity": 1,
    "width": 49,
    "toolTipShadowBlurRadius": 3,
    "toolTip": "Fullscreen",
    "toolTipFontColor": "#606060",
    "toolTipBorderColor": "#767676",
    "toolTipShadowSpread": 0,
    "paddingRight": 0,
    "toolTipTextShadowBlurRadius": 3,
    "toolTipPaddingRight": 6,
    "verticalAlign": "top",
    "paddingBottom": 0,
    "toolTipShadowColor": "#333333",
    "toolTipFontFamily": "Arial",
    "toolTipBorderSize": 1,
    "maxHeight": 128,
    "toolTipShadowHorizontalLength": 0,
    "paddingTop": 0,
    "shadow": false,
    "toolTipTextShadowColor": "#000000",
    "maxWidth": 128,
    "borderRadius": 0,
    "height": 39,
    "toolTipPaddingTop": 4,
    "backgroundOpacity": 0,
    "transparencyActive": true,
    "cursor": "hand",
    "toolTipTextShadowOpacity": 0,
    "minHeight": 1,
    "id": "IconButton_5B7E71AC_5712_EB49_41B2_5B0060EAAFC7",
    "data": {
     "name": "IconButton1493"
    },
    "toolTipPaddingBottom": 4,
    "toolTipBackgroundColor": "#F6F6F6",
    "iconURL": "skin/IconButton_5B7E71AC_5712_EB49_41B2_5B0060EAAFC7.png",
    "toolTipShadowOpacity": 1,
    "toolTipFontStyle": "normal",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton",
    "toolTipShadowVerticalLength": 0,
    "toolTipPaddingLeft": 6,
    "toolTipFontSize": 12,
    "toolTipDisplayTime": 600,
    "toolTipFontWeight": "normal"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "maxHeight": 57,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A_rollover.png",
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "shadow": false,
    "backgroundOpacity": 0,
    "click": "this.openLink(\"http://www.vrtourist.net\", \"_blank\")",
    "transparencyActive": false,
    "cursor": "hand",
    "minHeight": 1,
    "id": "IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A",
    "data": {
     "name": "IconButton info"
    },
    "iconURL": "skin/IconButton_3C1F487B_36A2_CB70_41B9_0CE7D23FFE2A.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton"
   },
   "this.IconButton_EC147732_E24F_68F6_41E6_5D380AA33370",
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "maxHeight": 57,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC_rollover.png",
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "shadow": false,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_E0A829D0_C5BB_E407_41E3_334A63423D29, true, 0, null, null, false)",
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC",
    "data": {
     "name": "IconButton floorplan"
    },
    "iconURL": "skin/IconButton_3C3C4B65_36A2_4E90_41C9_A07AEADA89BC.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "toggle",
    "width": 55,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "maxHeight": 57,
    "pressedIconURL": "skin/IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C_pressed.png",
    "paddingTop": 0,
    "click": "if(!this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8.get('visible')){ this.setComponentVisibility(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8, true, 0, null, null, false) } else if(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8.get('visible')){ this.setComponentVisibility(this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8, false, 0, null, null, false) }",
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 55,
    "shadow": false,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C",
    "data": {
     "name": "IconButton thumblist"
    },
    "iconURL": "skin/IconButton_3C3C31DF_36A3_DDB1_41C7_8171F047222C.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "maxHeight": 57,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3_rollover.png",
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "shadow": false,
    "backgroundOpacity": 0,
    "click": "this.setComponentVisibility(this.Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE, true, 0, null, null, false)",
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3",
    "data": {
     "name": "IconButton photo"
    },
    "iconURL": "skin/IconButton_3C0673F7_36A2_FD71_41C5_3490F0BDE1A3.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "maxHeight": 57,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258_rollover.png",
    "shadow": false,
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258",
    "data": {
     "name": "IconButton video"
    },
    "iconURL": "skin/IconButton_3C2C04F2_36A2_7B73_41AE_683320C0E258.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "toggle",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "maxHeight": 56,
    "pressedIconURL": "skin/IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E_pressed.png",
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 56,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "minHeight": 1,
    "id": "IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E",
    "data": {
     "name": "IconButton audio"
    },
    "iconURL": "skin/IconButton_3CEC4BCE_36A2_4D90_41B6_72DAF7FCDE9E.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "maxHeight": 57,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C_rollover.png",
    "shadow": false,
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 56,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C",
    "data": {
     "name": "IconButton FB"
    },
    "iconURL": "skin/IconButton_3C5D748E_36A1_FB93_41B9_40104D6FCC1C.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton"
   },
   {
    "propagateClick": false,
    "horizontalAlign": "center",
    "borderSize": 0,
    "mode": "push",
    "width": 57,
    "paddingRight": 0,
    "verticalAlign": "middle",
    "paddingBottom": 0,
    "maxHeight": 57,
    "paddingTop": 0,
    "rollOverIconURL": "skin/IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221_rollover.png",
    "shadow": false,
    "maxWidth": 57,
    "borderRadius": 0,
    "height": 57,
    "backgroundOpacity": 0,
    "transparencyActive": false,
    "cursor": "hand",
    "visible": false,
    "minHeight": 1,
    "id": "IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221",
    "data": {
     "name": "IconButton Twitter"
    },
    "iconURL": "skin/IconButton_E43B2726_C599_AC0A_41DF_3BC097AF1221.png",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "IconButton"
   }
  ]
 },
 {
  "horizontalAlign": "center",
  "propagateClick": false,
  "borderSize": 0,
  "width": "100%",
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "middle",
  "paddingBottom": 0,
  "shadow": false,
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "borderRadius": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "backgroundOpacity": 0,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "minHeight": 1,
  "id": "Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C",
  "data": {
   "name": "-- INFO"
  },
  "contentOpaque": false,
  "gap": 10,
  "layout": "horizontal",
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "width": "95%",
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "backgroundColorRatios": [
     0
    ],
    "verticalAlign": "top",
    "paddingBottom": 0,
    "maxHeight": 420,
    "paddingTop": 0,
    "shadow": false,
    "maxWidth": 722,
    "height": "95%",
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 0.3,
    "borderRadius": 0,
    "scrollBarColor": "#000000",
    "minHeight": 1,
    "id": "Container_E1F793EC_C5AF_A41E_41DE_B6A1C0172D80",
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "gap": 10,
    "layout": "absolute",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "Container",
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarMargin": 2,
      "width": "100%",
      "borderSize": 0,
      "paddingRight": 0,
      "creationPolicy": "delayed",
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "backgroundColorRatios": [
       0
      ],
      "shadow": false,
      "paddingTop": 0,
      "height": "100%",
      "scrollBarWidth": 10,
      "scrollBarOpacity": 0.5,
      "overflow": "scroll",
      "backgroundOpacity": 0.7,
      "top": "0%",
      "scrollBarColor": "#000000",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "Container_E1F783EC_C5AF_A41E_41B9_A87E2497FAAE",
      "data": {
       "name": "Container 1"
      },
      "contentOpaque": false,
      "gap": 17,
      "layout": "horizontal",
      "paddingLeft": 0,
      "minWidth": 1,
      "class": "Container",
      "left": "0%",
      "backgroundColorDirection": "vertical",
      "scrollBarVisible": "rollOver",
      "children": [
       {
        "propagateClick": false,
        "scrollBarMargin": 0,
        "scrollBarWidth": 8,
        "width": "50.97%",
        "borderSize": 0,
        "paddingRight": 10,
        "paddingBottom": 10,
        "shadow": false,
        "paddingTop": 10,
        "scrollBarOpacity": 0.8,
        "borderRadius": 0,
        "height": "75.238%",
        "backgroundOpacity": 0,
        "scrollBarColor": "#3399FF",
        "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:35px;\"><B>House Info</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:25px;\"><B><I>Subtitle</I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisl lorem, condimentum nec pharetra ac, fringilla at quam. Nam gravida efficitur dui vitae auctor. Donec in ultricies orci, in sodales risus. Aliquam lacinia velit felis, vitae ullamcorper quam aliquam in. Phasellus vitae massa condimentum, tincidunt lacus a, faucibus lorem. Duis vitae rutrum dui. Aliquam erat volutpat. Integer bibendum maximus nulla eu ultrices. Nam sed dignissim risus. Mauris molestie libero ut imperdiet mattis. In eget nulla vel leo pharetra volutpat quis vel odio. Quisque tincidunt, dui sed egestas laoreet, augue tellus tincidunt ligula, eu consectetur dolor purus quis nisl. Morbi rhoncus vel magna malesuada dictum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">Duis pretium, tortor sit amet mollis pharetra, dolor tellus mattis justo, at consequat purus enim eu velit. Duis cursus urna tellus.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:14px;\">In nec urna eu urna tincidunt commodo nec quis dolor. Nulla consectetur, justo sed scelerisque congue, dolor ex pharetra velit, et dapibus lorem quam vel sapien. Cras justo dui, consequat et blandit at, consectetur in justo. Nulla posuere nulla libero, et tempus risus lobortis vitae. Nunc sed posuere diam. Phasellus non mauris lacus.</SPAN></SPAN></DIV></div>",
        "minHeight": 1,
        "id": "HTMLText_E1F7B3EC_C5AF_A41F_41E0_E2BA38FA4626",
        "data": {
         "name": "HTMLText"
        },
        "paddingLeft": 10,
        "minWidth": 1,
        "class": "HTMLText",
        "scrollBarVisible": "rollOver"
       },
       {
        "propagateClick": false,
        "horizontalAlign": "center",
        "borderSize": 0,
        "width": "32.825%",
        "paddingRight": 0,
        "url": "skin/Image_E1F7A3EC_C5AF_A41F_41B6_053480495D06.jpg",
        "verticalAlign": "middle",
        "paddingBottom": 0,
        "maxHeight": 237,
        "paddingTop": 0,
        "shadow": false,
        "maxWidth": 237,
        "scaleMode": "fit_inside",
        "borderRadius": 0,
        "height": "56.429%",
        "backgroundOpacity": 0,
        "minHeight": 1,
        "id": "Image_E1F7A3EC_C5AF_A41F_41B6_053480495D06",
        "data": {
         "name": "Image"
        },
        "paddingLeft": 0,
        "minWidth": 1,
        "class": "Image"
       }
      ]
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 34,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 34,
      "maxHeight": 34,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794_rollover.png",
      "shadow": false,
      "maxWidth": 34,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "top": 20,
      "click": "this.setComponentVisibility(this.Container_E1F7C3EC_C5AF_A41F_41C2_611BC409AE4C, false, 0, null, null, false)",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794",
      "data": {
       "name": "X"
      },
      "iconURL": "skin/IconButton_E1F7D3EC_C5AF_A41F_41CE_A960447BF794.png",
      "paddingLeft": 0,
      "minWidth": 1,
      "class": "IconButton",
      "right": 20
     }
    ]
   }
  ]
 },
 {
  "propagateClick": false,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0
  ],
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.7,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_E0A829D0_C5BB_E407_41E3_334A63423D29",
  "data": {
   "name": "--- FLOORPLAN"
  },
  "contentOpaque": false,
  "gap": 10,
  "layout": "absolute",
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "borderSize": 0,
    "paddingRight": 30,
    "creationPolicy": "delayed",
    "verticalAlign": "top",
    "paddingBottom": 30,
    "backgroundColorRatios": [
     0,
     1
    ],
    "shadow": false,
    "paddingTop": 30,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "top": "12%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minHeight": 1,
    "bottom": "12%",
    "id": "Container_E0A8D9D0_C5BB_E407_41DC_C8A6343CBB92",
    "gap": 10,
    "data": {
     "name": "Container global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "paddingLeft": 30,
    "minWidth": 1,
    "class": "Container",
    "left": "15%",
    "backgroundColorDirection": "vertical",
    "right": "15%",
    "children": [
     {
      "transitionDuration": 500,
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowColor": "#333333",
      "progressBarBorderColor": "#000000",
      "playbackBarBottom": 0,
      "toolTipPaddingBottom": 4,
      "toolTipShadowHorizontalLength": 0,
      "progressBorderColor": "#000000",
      "paddingTop": 0,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "minHeight": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowOpacity": 1,
      "minWidth": 1,
      "playbackBarProgressBorderRadius": 0,
      "toolTipDisplayTime": 600,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderRadius": 0,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipShadowSpread": 0,
      "toolTipOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "width": "100%",
      "toolTipFontColor": "#606060",
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipPaddingRight": 6,
      "playbackBarProgressOpacity": 1,
      "paddingBottom": 0,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "shadow": false,
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontFamily": "Arial",
      "progressBottom": 2,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowColor": "#000000",
      "top": "0%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipTextShadowOpacity": 0,
      "progressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "id": "ViewerAreaLabeled_E0A8C9D0_C5BB_E407_41CE_073D958CCF63",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "height": "100%",
      "paddingLeft": 0,
      "toolTipFontStyle": "normal",
      "left": "0%",
      "progressBarOpacity": 1,
      "toolTipFontSize": 12,
      "class": "ViewerArea",
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "playbackBarOpacity": 1,
      "playbackBarLeft": 0,
      "propagateClick": false,
      "toolTipFontWeight": "normal"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 34,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "height": 34,
      "maxHeight": 34,
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09_rollover.png",
      "shadow": false,
      "maxWidth": 34,
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "top": 0,
      "click": "this.setComponentVisibility(this.Container_E0A829D0_C5BB_E407_41E3_334A63423D29, false, 0, null, null, false)",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 1,
      "id": "IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09",
      "data": {
       "name": "X"
      },
      "iconURL": "skin/IconButton_E0A839D0_C5BB_E407_41C2_EC54E5017B09.png",
      "paddingLeft": 0,
      "minWidth": 1,
      "class": "IconButton",
      "right": 0
     }
    ]
   }
  ]
 },
 {
  "propagateClick": false,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "width": "100%",
  "scrollBarMargin": 2,
  "borderSize": 0,
  "paddingRight": 0,
  "creationPolicy": "delayed",
  "verticalAlign": "top",
  "paddingBottom": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "shadow": false,
  "paddingTop": 0,
  "height": "100%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "overflow": "scroll",
  "backgroundOpacity": 0.8,
  "top": "0%",
  "visible": false,
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_E9C4FE21_C598_FC06_41D7_CD501108E8EE",
  "data": {
   "name": "---PHOTOALBUM"
  },
  "contentOpaque": false,
  "gap": 10,
  "layout": "absolute",
  "paddingLeft": 0,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "propagateClick": false,
    "horizontalAlign": "left",
    "backgroundColor": [
     "#000000",
     "#000000"
    ],
    "scrollBarMargin": 2,
    "borderSize": 0,
    "paddingRight": 0,
    "creationPolicy": "delayed",
    "verticalAlign": "top",
    "paddingBottom": 0,
    "backgroundColorRatios": [
     0,
     1
    ],
    "shadow": false,
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "scrollBarOpacity": 0.5,
    "overflow": "scroll",
    "backgroundOpacity": 1,
    "top": "12%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "minHeight": 1,
    "bottom": "12%",
    "id": "Container_E9C4AE21_C598_FC06_41BB_4CE2E02053A5",
    "gap": 10,
    "data": {
     "name": "Global"
    },
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "paddingLeft": 0,
    "minWidth": 1,
    "class": "Container",
    "left": "16%",
    "backgroundColorDirection": "vertical",
    "right": "16%",
    "children": [
     {
      "transitionDuration": 500,
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBorderRadius": 0,
      "playbackBarHeadHeight": 15,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowBlurRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "toolTipShadowColor": "#333333",
      "progressBarBorderColor": "#000000",
      "playbackBarBottom": 0,
      "toolTipPaddingBottom": 4,
      "toolTipShadowHorizontalLength": 0,
      "progressBorderColor": "#000000",
      "paddingTop": 0,
      "toolTipTextShadowColor": "#000000",
      "progressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadOpacity": 1,
      "borderRadius": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "transitionMode": "blending",
      "minHeight": 1,
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadWidth": 6,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeight": 10,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarRight": 0,
      "toolTipShadowOpacity": 1,
      "minWidth": 1,
      "playbackBarProgressBorderRadius": 0,
      "toolTipDisplayTime": 600,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderRadius": 0,
      "progressBarBorderSize": 0,
      "toolTipPaddingLeft": 6,
      "playbackBarBorderRadius": 0,
      "playbackBarHeadBorderRadius": 0,
      "toolTipShadowSpread": 0,
      "toolTipOpacity": 1,
      "playbackBarProgressBorderColor": "#000000",
      "borderSize": 0,
      "playbackBarHeadBorderColor": "#000000",
      "width": "100%",
      "toolTipFontColor": "#606060",
      "toolTipBorderColor": "#767676",
      "paddingRight": 0,
      "playbackBarHeadBorderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipPaddingRight": 6,
      "playbackBarProgressOpacity": 1,
      "paddingBottom": 0,
      "progressLeft": 0,
      "playbackBarBorderSize": 0,
      "shadow": false,
      "playbackBarBackgroundOpacity": 1,
      "toolTipFontFamily": "Arial",
      "progressBottom": 2,
      "playbackBarHeadShadowVerticalLength": 0,
      "progressHeight": 10,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "toolTipPaddingTop": 4,
      "playbackBarHeadShadowColor": "#000000",
      "top": "0%",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressRight": 0,
      "toolTipTextShadowOpacity": 0,
      "progressOpacity": 1,
      "playbackBarHeadShadowOpacity": 0.7,
      "id": "ViewerAreaLabeled_E9C4BE21_C598_FC06_41D4_4C90E452373D",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarHeadShadow": true,
      "toolTipBackgroundColor": "#F6F6F6",
      "playbackBarBorderColor": "#FFFFFF",
      "progressBackgroundOpacity": 1,
      "height": "100%",
      "paddingLeft": 0,
      "toolTipFontStyle": "normal",
      "left": "0%",
      "progressBarOpacity": 1,
      "toolTipFontSize": 12,
      "class": "ViewerArea",
      "progressBackgroundColorRatios": [
       0
      ],
      "progressBorderSize": 0,
      "playbackBarOpacity": 1,
      "playbackBarLeft": 0,
      "propagateClick": false,
      "toolTipFontWeight": "normal"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 150,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "maxHeight": 50,
      "pressedIconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343_pressed.png",
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343_rollover.png",
      "shadow": false,
      "maxWidth": 50,
      "backgroundOpacity": 0,
      "top": "45.14%",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 40,
      "bottom": "44.86%",
      "id": "IconButton_E9C48E21_C598_FC06_41D5_5911166B8343",
      "data": {
       "name": ">"
      },
      "iconURL": "skin/IconButton_E9C48E21_C598_FC06_41D5_5911166B8343.png",
      "paddingLeft": 0,
      "minWidth": 40,
      "class": "IconButton",
      "right": "0.91%"
     },
     {
      "propagateClick": false,
      "horizontalAlign": "center",
      "borderSize": 0,
      "mode": "push",
      "width": 150,
      "paddingRight": 0,
      "verticalAlign": "middle",
      "paddingBottom": 0,
      "maxHeight": 50,
      "pressedIconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507_pressed.png",
      "paddingTop": 0,
      "rollOverIconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507_rollover.png",
      "shadow": false,
      "maxWidth": 50,
      "backgroundOpacity": 0,
      "top": "45%",
      "transparencyActive": true,
      "cursor": "hand",
      "borderRadius": 0,
      "minHeight": 40,
      "bottom": "45%",
      "id": "IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507",
      "data": {
       "name": "<"
      },
      "iconURL": "skin/IconButton_E9C49E21_C598_FC06_41E2_F042C19AF507.png",
      "paddingLeft": 0,
      "minWidth": 40,
      "class": "IconButton",
      "left": "1%"
     },
     "this.IconButton_E9C4EE21_C598_FC06_41B3_CE442BB0B40A"
    ]
   }
  ]
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "51.334%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_6AFF6A12_6624_BF11_41D7_00E912F21293, false, 0, this.effect_76979B28_662B_DD31_41A5_83A2CCCCCD50, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "37.528%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "7.95%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;font-family:'Vivaldi';\"><B>Catherine Palace</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:30px;font-family:Tahoma, Geneva, sans-serif;\"><I>Summer Residence</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">The Catherine Palace (Russian: \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0438\u043d\u0441\u043a\u0438\u0439 \u0434\u0432\u043e\u0440\u0435\u0446, Yekaterininskiy dvorets) is a Rococo palace located in the town of Tsarskoye Selo (Pushkin), 30 km south of St. Petersburg, Russia. It was the summer residence of the Russian tsars.</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_6AFF6A12_6624_BF11_41D7_00E912F21293",
  "data": {
   "name": "Catherine Palace"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "class": "HTMLText",
  "left": "5.97%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "41.9%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_76D5487C_662C_5B11_41D9_57D95BE1ECAA, false, 0, this.effect_7605A045_662C_AB73_41C5_E2AE07267771, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "31.818%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "8.41%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;font-family:'Vivaldi';\"><B>Amber Chamber</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:Tahoma, Geneva, sans-serif;\"><I>Baroque Wonder</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">The Amber Room (Russian: \u042f\u043d\u0442\u0430\u0440\u043d\u0430\u044f \u043a\u043e\u043c\u043d\u0430\u0442\u0430, tr. Yantarnaya Komnata) was a chamber decorated in amber panels backed with gold leaf and mirrors, located in the Catherine Palace of Tsarskoye Selo near Saint Petersburg.</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_76D5487C_662C_5B11_41D9_57D95BE1ECAA",
  "data": {
   "name": "Amber Chamber"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "class": "HTMLText",
  "left": "6.09%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "52.575%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1, false, 0, this.effect_F6277EDC_E701_509A_41CB_E2F6CCC71352, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "43.835%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "5.17%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;font-family:'Vivaldi';\"><B>The Hermitage Pavilion</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:30px;font-family:Tahoma, Geneva, sans-serif;\"><I>Place of Solitude</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">About fifteen minutes walk away from the Catherine Palace there is fancifully adorned 2-storey pavilion in Catherine Park can be seen. The name of the structure is \u201cthe Hermitage\u201d. Hermitage is initially the French word that stands for \u201cplace of solitude\u201d. Idea of the Hermitages appeared in Europe in the late 17th century. Usually the \u201cHermitages\u201d were the small huts in the woods, resembling the hunting lodges, but quite nicely decorated inside.</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_EBD2B595_E703_716A_41E8_D9A2DB8BE2A1",
  "data": {
   "name": "Hermitage"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "class": "HTMLText",
  "left": "2.39%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "49.592%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_E8B870A7_E703_50B6_41D6_47A4A991A025, false, 0, this.effect_F70D17ED_E70E_D0B5_41D4_1DF55FF430EA, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "39.205%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "5.26%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;font-family:'Vivaldi';\">The Grotto</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:33px;font-family:Tahoma, Geneva, sans-serif;\"><I>The Morning Hall</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Set on the shore of the lake, this lovely blue and white baroque pavilion was constructed under Elisabeth and her grand festivals. Her successor Catherine the Great used this building in a different way. Catherine loved to hide here early in the summer mornings, slipping away from the palace for reading and paperwork. She used to name this attraction \u201cthe morning hall\u201d. Tranquility was precious to the empress; she liked to enjoy the cool summer breeze from the mirror-like lake waters.</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_E8B870A7_E703_50B6_41D6_47A4A991A025",
  "data": {
   "name": "Grotto"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "class": "HTMLText",
  "left": "1.19%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "45.432%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_F709B4D1_E703_30EA_41E1_0AE9D5915F61, false, 0, this.effect_F7D78EBC_E701_509B_41EC_8212EC4A75BA, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "33.807%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "5.6%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;font-family:'Vivaldi';\"><B>Cameron Gallery</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:30px;font-family:Tahoma, Geneva, sans-serif;\"><I>Strolls and Conversations</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">The gallery that Empress Catherine II conceived as a place for strolls and philosophical conversations and Cameron created for her is located on the slope of a hill on the boundary between the regular and landscape areas of the Catherine Park near the Catherine Palace.</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_F709B4D1_E703_30EA_41E1_0AE9D5915F61",
  "data": {
   "name": "Cameron Gallery"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "class": "HTMLText",
  "left": "3.34%",
  "scrollBarVisible": "rollOver"
 },
 {
  "propagateClick": false,
  "borderSize": 0,
  "width": "50.942%",
  "scrollBarMargin": 2,
  "paddingRight": 20,
  "paddingBottom": 20,
  "shadow": false,
  "paddingTop": 20,
  "click": "this.setComponentVisibility(this.HTMLText_F77434A0_E701_50AB_41E4_EA218E93C02A, false, 0, this.effect_F7C2244B_E706_D7FE_41DE_79C949DF546B, 'hideEffect', false)",
  "borderRadius": 0,
  "height": "39.744%",
  "scrollBarWidth": 10,
  "scrollBarOpacity": 0.5,
  "backgroundOpacity": 0,
  "top": "4.83%",
  "visible": false,
  "scrollBarColor": "#000000",
  "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:53px;font-family:'Vivaldi';\"><B>The Pyramid</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#3399ff;font-size:30px;font-family:Tahoma, Geneva, sans-serif;\"><I>Burial Place</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">The Pyramid \u2013 one of the first pavilions in the Landscape Park (the Catherine Park) \u2013 was constructed in 1770\u201372 to the design of Vasily Neyelov. It was dismantled as early as 1774 and rebuilt in 1782\u201383 by Charles Cameron. The green, moss-covered surface of what is a typical construction for parks in the late eighteenth-century Romantic era gives it the look of an ancient mausoleum.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:Tahoma, Geneva, sans-serif;\">Behind the Pyramid, opposite the entrance, three of Catherine II\u2019s favourite dogs were buried: Tom Anderson, Zemira and Duchesse. The graves were once marked by white marble stones with engraved epitaphs but those have not survived</SPAN></SPAN></DIV></div>",
  "minHeight": 1,
  "id": "HTMLText_F77434A0_E701_50AB_41E4_EA218E93C02A",
  "data": {
   "name": "Pyramid"
  },
  "paddingLeft": 20,
  "minWidth": 1,
  "class": "HTMLText",
  "left": "2.34%",
  "scrollBarVisible": "rollOver"
 }
], 
 "start": "this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EC147732_E24F_68F6_41E6_5D380AA33370], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_383B9917_3505_31E2_41C8_50D696E1ABD8_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_5B7E71AC_5712_EB49_41B2_5B0060EAAFC7].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": false,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "borderSize": 0,
 "paddingRight": 0,
 "creationPolicy": "delayed",
 "verticalAlign": "top",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; }
 },
 "borderRadius": 0,
 "height": "100%",
 "scrollBarWidth": 10,
 "scrollBarOpacity": 0.5,
 "overflow": "visible",
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "id": "rootPlayer",
 "data": {
  "name": "Player448"
 },
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "paddingLeft": 0,
 "minWidth": 20,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 1,
 "buttonToggleFullscreen": "this.IconButton_5B7E71AC_5712_EB49_41B2_5B0060EAAFC7",
 "backgroundPreloadEnabled": true
})