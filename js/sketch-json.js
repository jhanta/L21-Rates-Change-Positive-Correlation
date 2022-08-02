var sketch = {
  "metadata": {
    "width": 1183,
    "height": 790,
    "wsp-version": "4.8.0",
    "wsp-build-number": "1070",
    "wsp-build-stamp": "8126303e6615/20200924134425",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L21 Rates of Change Positive Correlation.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "pagecontrol": true,
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Comic Sans MS\", sans-serif",
      "\"Arial\", sans-serif",
      "\"Papyrus\", sans-serif",
      "\"Geneva\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": -51,
          "left": -18,
          "bottom": 739,
          "right": 1165
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(160,160,160)"
          },
          "Straights": {
            "color": "rgb(252,1,7)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "rgb(192,133,74)"
          },
          "Plot": {
            "color": "lime"
          },
          "PointLocus": {
            "color": "blue"
          },
          "CoordSys": {
            "color": "rgb(160,160,160)"
          },
          "ActionButton": {
            "color": "rgb(252,1,7)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": false,
          "textTypes": {
            "Label": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 18,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 14,
              "color": "blue"
            },
            "Measurement": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Papyrus\", sans-serif",
                "font-size": 11
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1324,
              "y": 215
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "speed",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 141,
              "y": 56
            }
          },
          "latentVisibility": true,
          "label": "C",
          "style": {
            "color": "black",
            "radius": 2
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 112,
              "y": 110
            }
          },
          "label": "E",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "4": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "p1": "3"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "green",
            "width": 1
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2"
          },
          "angle": -1.5707963267949,
          "distance": 28.346456692913385,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "AngleParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1573,
              "y": 287
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.01\u00b0",
          "latentVisibility": true,
          "label": "angle end right",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "AngleParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1573,
              "y": 305
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.01\u00b0",
          "latentVisibility": true,
          "label": "ange end left",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "8": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1230,
              "y": 167
            }
          },
          "textMFS": "<VL<T'parameters which use the clock\\'s angle'><T'measurement and the speed to determine'><T'distance'><F1FxxFFFFFFFFx20xCx>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "9": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1306,
              "y": 260
            }
          },
          "textMFS": "<T'time in seconds'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "10": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1573,
              "y": 253
            }
          },
          "textMFS": "<VL<T'parameters used to position point on clock so'><T'angle will not measure 0 degrees'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "11": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1235,
              "y": 384
            }
          },
          "textMFS": "<VL<T'timed animation of point on clock for 2.8'><T'seconds, want it to go past half'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "12": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1235,
              "y": 456
            }
          },
          "textMFS": "<T'moves point rest of way just shy of 360 degreees'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "13": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1235,
              "y": 495
            }
          },
          "textMFS": "<T'calls above actions to move once around clock'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "2",
            "p1": "5"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "14",
            "circle": "4"
          },
          "constraint": "Intersection2",
          "label": "B",
          "style": {
            "hidden": true,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "center": "2",
            "angle": "7"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "center": "2",
            "angle": "6"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "15"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "19": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1475,
              "y": 310
            }
          },
          "textMFS": "<VL<T'30'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 8,
            "color": "rgb(51,51,51)"
          }
        },
        "20": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1450,
              "y": 310
            }
          },
          "textMFS": "<VL<T'15'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 8,
            "color": "rgb(51,51,51)"
          }
        },
        "21": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1450,
              "y": 294
            }
          },
          "textMFS": "<VL<T'45'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 8,
            "color": "rgb(51,51,51)"
          }
        },
        "22": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1475,
              "y": 294
            }
          },
          "textMFS": "<VL<T' 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 8,
            "color": "black"
          }
        },
        "23": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 169
            }
          },
          "textMFS": "<VL<T'Parameters to create'><T'clock tick marks'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 450,
              "y": 4
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1380,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6 pixels",
          "label": "radius",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1266,
              "y": 34
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "10",
          "latentVisibility": true,
          "label": "divisions",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "27": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1266,
              "y": 54
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7 cm",
          "latentVisibility": true,
          "label": "len",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "distance": "27"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "red",
            "radius": 2
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "28",
            "p1": "24"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)"
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.4716918218306812,
          "constraint": "PointOnPath",
          "label": "Y",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "31": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "24",
            "obj0": "30"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1369,
              "y": 354
            }
          },
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "32": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "31",
            "1": "27",
            "2": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1372,
              "y": 386
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0/@1*@2)*@1/@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "distance": "32"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "34": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "31",
            "1": "32",
            "2": "33",
            "drivenObject": "33",
            "domainObject": "29",
            "driverObject": "30"
          },
          "constraint": "GeomLocus",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 300,
          "isDiscrete": true,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "35": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "34"
          },
          "value": 0.20066889632107013,
          "constraint": "PointOnPath",
          "label": "drag",
          "style": {
            "label": {
              "showLabel": true,
              "labelOffsetX": -7,
              "labelOffsetY": -16,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "36": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "24",
            "obj0": "35"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 907,
              "y": 129
            }
          },
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "27"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 911,
              "y": 200
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2",
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1380,
              "y": 517
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2-trunc(@0/2)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "38"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1379,
              "y": 558
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "even",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "40": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "39"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1134,
              "y": 258
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "odd",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "41": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "36",
            "1": "37",
            "2": "27",
            "3": "26",
            "4": "40"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 453,
              "y": 27
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-@1)/(@2/@3)+@4*.5+5",
          "label": "Change in Volume",
          "style": {
            "font-size": 14,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "42": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "35",
            "radius": "25"
          },
          "constraint": "CircleByRadius",
          "style": {
            "selectable": false,
            "width": 1
          }
        },
        "43": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "42"
          },
          "constraint": "CircleInterior",
          "style": {
            "opacity": 0.7499961853027344,
            "layerOrder": 0
          }
        },
        "44": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1241,
              "y": 216
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "rate",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "29",
            "circle": "42"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "29",
            "circle": "42"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "47": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 179,
              "y": 577
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "48": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "47"
          },
          "geom": {
            "loc": {
              "x": 1240,
              "y": 551
            }
          },
          "latentVisibility": true,
          "label": "Dummy Hide for Erase Traces",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 1,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Dummy Hide for Erase Traces",
            "Dummy Hide for Erase Traces"
          ]
        },
        "49": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1268,
              "y": -2
            }
          },
          "textMFS": "<VL<T'parameter\\'s to control'><T'slider size etc'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "50": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "center": "2",
            "p0": "16",
            "p1": "15"
          },
          "constraint": "ArcAroundPoint",
          "latentVisibility": true,
          "style": {
            "selectable": false
          }
        },
        "51": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "50"
          },
          "value": 0.5848257546430977,
          "constraint": "PointOnPath",
          "label": "G",
          "style": {
            "hidden": true,
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "52": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "2",
            "obj0": "51"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 203
            }
          },
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 221
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-0.4 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "54": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "53"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-0.2 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "56": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "55"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "color": "blue",
            "width": 1
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 257
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-0.5 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "58": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "57"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "51"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "60": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "center": "2",
            "p0": "51",
            "p1": "15"
          },
          "constraint": "ArcAroundPoint",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1450,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-0.6 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "62": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "61"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 501,
              "y": 472
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 369,
              "y": 467
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -18,
              "y": -51
            }
          },
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "66": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "65"
          },
          "geom": {
            "loc": {
              "x": -94,
              "y": -6
            }
          },
          "label": "Scroll",
          "style": {
            "color": "rgb(160,160,160)",
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonScroll",
          "messages": [
            "Scroll"
          ],
          "shouldAutogenerateLabel": true,
          "scrollDest": "topLeft"
        },
        "67": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 1008,
              "y": -1
            }
          },
          "label": "Next Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Next Page"
          ],
          "pageId": "2"
        },
        "68": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "27",
            "1": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1483,
              "y": 4
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "69": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1483,
              "y": 42
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.2 cm",
          "latentVisibility": true,
          "label": "slider tick",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "70": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1502,
              "y": 78
            }
          },
          "latentVisibility": true,
          "label": "G[1]",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "71": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "70",
            "distance": "69"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "72": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "70",
            "distance": "69"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "73": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "72",
            "p1": "71"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "label": "m",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "74": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "73",
            "p0": "70",
            "p1": "24"
          },
          "constraint": "TranslateVector",
          "label": "0",
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -4,
              "labelOffsetY": 5,
              "labelParam": 0,
              "font-size": 12
            },
            "width": 1
          }
        },
        "75": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "74",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "75",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "77": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "76",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "78": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "77",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "79": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "78",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "80": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "79",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "81": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "80",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "82": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "81",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "82",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "84": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "83",
            "distance": "68"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "label": "10",
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -6,
              "labelOffsetY": 1,
              "labelParam": 0,
              "font-size": 12
            },
            "width": 1
          }
        },
        "85": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1490,
              "y": -16
            }
          },
          "textMFS": "<VL<T'Slider ticks'>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "86": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 127,
              "y": 62
            }
          },
          "textMFS": "<T'secs'>",
          "style": {
            "font-size": 12,
            "color": "black"
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -507,
              "y": 25
            }
          },
          "label": "H[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "88": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1577,
              "y": 226
            }
          },
          "textMFS": "<VL<T'={1} s'>>",
          "label": "t[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "89": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1577,
              "y": 208
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.8 cm",
          "latentVisibility": true,
          "label": "rad clock s label",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "90": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1577,
              "y": 168
            }
          },
          "textMFS": "<VL<T'parameters for clock time label'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "91": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "89"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "92": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1003,
              "y": 473
            }
          },
          "label": "First Half",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -48,
              "labelOffsetY": -4,
              "font-family": 1,
              "font-size": 10
            },
            "radius": 2
          }
        },
        "93": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1034,
              "y": 349
            }
          },
          "label": "First Quarter",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -64,
              "labelOffsetY": -9,
              "font-family": 1,
              "font-size": 10
            },
            "radius": 2
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1002,
              "y": 298
            }
          },
          "label": "Second Eighth",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -73,
              "labelOffsetY": -6,
              "font-family": 1,
              "font-size": 10
            },
            "radius": 2
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -59,
              "y": 63
            }
          },
          "label": "Origin",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -5,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 16
            },
            "radius": 2
          }
        },
        "96": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 701,
              "y": 463
            }
          },
          "label": "Bottom Can",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "97": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 761,
              "y": 283
            }
          },
          "label": "N",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "98": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 761,
              "y": 293
            }
          },
          "label": "D",
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "99": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "origin": "95"
          },
          "value": 10,
          "constraint": "HorizontalUnitPoint",
          "label": "Unit Point",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -8,
              "font-family": 1,
              "font-size": 16
            },
            "radius": 2
          }
        },
        "100": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "95",
            "obj0": "99"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1210,
              "y": 576
            }
          },
          "label": "unit scale",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 12,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "101": {
          "kind": "Point",
          "genus": "OriginPoint",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 694,
              "y": 408
            }
          },
          "label": "0",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": -8,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "102": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "origin": "101"
          },
          "value": 4.963123359580095,
          "constraint": "HorizontalUnitPoint",
          "label": "M",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "103": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "unitPoint": "102"
          },
          "unitDistance": 57.12166666666667,
          "constraint": "UnitPointInternalRectangle",
          "label": "L",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "104": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "101",
            "unitPoint": "103"
          },
          "constraint": "AxisInternalDist",
          "orientation": "vertical",
          "label": "y",
          "style": {
            "hidden": true,
            "color": "navy",
            "label": {
              "showLabel": false,
              "font-family": 3,
              "font-size": 10,
              "color": "navy"
            },
            "width": 1
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "2",
            "line": "104"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "106": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "105",
            "circle": "54"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "107": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "104"
          },
          "value": -5.96971376885595,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "108": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "107"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "109": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "107",
            "p1": "108"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "110": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "101",
            "p1": "107"
          },
          "constraint": "Segment",
          "label": "k",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "111": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "110",
            "circle": "109"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111",
            "center": "107"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111",
            "center": "107"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "114": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "113",
            "center": "107"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "115": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "101",
            "unitPoint": "102"
          },
          "constraint": "AxisInternalDist",
          "orientation": "horizontal",
          "label": "x",
          "style": {
            "hidden": true,
            "color": "navy",
            "label": {
              "showLabel": false,
              "font-family": 3,
              "font-size": 10,
              "color": "navy"
            },
            "width": 1
          }
        },
        "116": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "115"
          },
          "value": 65.88593035246777,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "118": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "116",
            "p1": "117"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "119": {
          "kind": "CoordSys",
          "genus": "CoordSys",
          "parents": {
            "axisX": "115",
            "axisY": "104"
          },
          "constraint": "CoordSys",
          "shape": "rectangular",
          "style": {
            "hidden": true,
            "grid": "gridlines"
          }
        },
        "120": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "119"
          },
          "coordX": 10,
          "coordY": 0,
          "constraint": "PlotFixedXFixedY",
          "label": "U",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "119"
          },
          "coordX": 5,
          "coordY": 1,
          "constraint": "PlotFixedXFixedY",
          "label": "V",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "122": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "119"
          },
          "coordX": 0,
          "coordY": -200,
          "constraint": "PlotFixedXFixedY",
          "label": "O",
          "style": {
            "hidden": true,
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "119"
          },
          "coordX": 0,
          "coordY": -100,
          "constraint": "PlotFixedXFixedY",
          "label": "S",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "124": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "101",
            "p1": "116"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(32,32,64)",
            "width": 1
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "124",
            "circle": "118"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "126": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "125",
            "center": "116"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "127": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "125",
            "center": "116"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127",
            "center": "116"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "129": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "52.5 cm",
          "latentVisibility": true,
          "label": "depth",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "130": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 464,
              "y": 422
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.5 cm",
          "latentVisibility": true,
          "label": "vase base",
          "style": {
            "font-size": 12,
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "131": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 267,
              "y": 423
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3.25 cm",
          "latentVisibility": true,
          "label": "vase base",
          "style": {
            "font-size": 12,
            "color": "green",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "132": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 61,
              "y": 425
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm",
          "latentVisibility": true,
          "label": "vase offset",
          "style": {
            "font-size": 12,
            "color": "blue",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "133": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 41
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2 cm",
          "latentVisibility": true,
          "label": "width vase 1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "134": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 23
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4 cm",
          "latentVisibility": true,
          "label": "height vase",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "135": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "134"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1806,
              "y": 243
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "H",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "136": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "133"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1803,
              "y": 170
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "width[v1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "137": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "132"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1803,
              "y": 192
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "width offset[v1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "138": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "131"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "a[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "139": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "133"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1809,
              "y": 551
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "base vase 1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "140": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "131"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 218
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "a[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "141": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "130"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2105,
              "y": 174
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "a[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "142": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "139",
            "1": "134",
            "2": "129"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1619,
              "y": 694
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "latentVisibility": true,
          "label": "m[12]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "143": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "50"
          },
          "value": 0.9999722214505958,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "D",
          "style": {
            "color": "red",
            "radius": 2
          }
        },
        "144": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "center": "2",
            "p0": "143",
            "p1": "15"
          },
          "constraint": "ArcAroundPoint",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "145": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "105",
            "circle": "144"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "146": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "106",
            "p1": "145"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "147": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "146",
            "circle": "56"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "148": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "147",
            "p1": "145"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "149": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "148",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "150": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "149",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "151": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "150",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "152": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "151",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "153": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "152",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "154": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "153",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "155": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "154",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "156": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "155",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "157": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "156",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "158": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "157",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "159": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "158",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "160": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "159",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "161": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "160",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "162": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "161",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "163": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "162",
            "circle": "56"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "164": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "162",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "165": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "164",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "166": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "165",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "167": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "166",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "168": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "167",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "169": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "168",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "170": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "169",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "171": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "170",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "172": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "171",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "173": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "172",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "174": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "173",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "175": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "174",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "176": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "175",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "177": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "176",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "178": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "177",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "179": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "178",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "180": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "179",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "181": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "180",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "182": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "181",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "183": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "182",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "184": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "183",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "185": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "184",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "186": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "185",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "187": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "186",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "188": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "187",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "189": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "188",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "190": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "189",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "191": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "190",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "192": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "191",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "193": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "192",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "194": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "193",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "195": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "194",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "196": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "195",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "197": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "196",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "198": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "197",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "199": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "198",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "200": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "199",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "201": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "200",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "202": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "201",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "203": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "202",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "204": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "203",
            "circle": "50"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "205": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "203",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "206": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "205",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "207": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "206",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "208": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "207",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "209": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "208",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "210": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "146",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "211": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "210",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "212": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "211",
            "circle": "56"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "213": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "211",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "214": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "213",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "215": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "214",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "216": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "215",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "217": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "216",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "218": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "217",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "219": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "218",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "220": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "219",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "221": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "220",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "222": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "219",
            "circle": "50"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "223": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "222",
            "line": "219"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "224": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "223",
            "circle": "62"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "225": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "224",
            "text": "20"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 12,
            "color": "rgb(51,51,51)"
          }
        },
        "226": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "223",
            "circle": "62"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "227": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "226",
            "text": "21"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 12,
            "color": "rgb(51,51,51)"
          }
        },
        "228": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "216",
            "circle": "50"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "229": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "228",
            "line": "216"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "230": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "229",
            "circle": "62"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "231": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "230",
            "text": "19"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 12,
            "color": "rgb(51,51,51)"
          }
        },
        "232": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "229",
            "circle": "62"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "233": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "232",
            "text": "22"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 12,
            "color": "black"
          }
        },
        "234": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "arc": "144"
          },
          "constraint": "MeasurementArcAngle",
          "geom": {
            "loc": {
              "x": 1236,
              "y": 236
            }
          },
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "235": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "234"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1233,
              "y": 259
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/360*60/1\u00b0",
          "latentVisibility": true,
          "label": "time",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromLabel"
          }
        },
        "236": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41",
            "1": "235"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1233,
              "y": 281
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*1 cm^3",
          "latentVisibility": true,
          "label": "V[w]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "237": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "142",
            "1": "236"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 270,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "label": "m[11]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "238": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "237"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 270,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(@0)",
          "label": "m[10]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "239": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "238"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 270,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(1+@0)",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "240": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "239"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1619,
              "y": 676
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "V[w] <= 400",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "241": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "240"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1619,
              "y": 658
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[9]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "242": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "235"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1577,
              "y": 187
            }
          },
          "textMFS": "<VL<H<0><H<?1xC0001<H<T'0.0'>>><T' s'>>>>",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "243": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "143"
          },
          "geom": {
            "loc": {
              "x": 1240,
              "y": 418
            }
          },
          "latentVisibility": true,
          "label": "Animate Clock Point",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Clock Point"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 0,
              "repeat": false,
              "motionType": "backward"
            }
          ]
        },
        "244": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "243"
          },
          "geom": {
            "loc": {
              "x": 1240,
              "y": 437
            }
          },
          "latentVisibility": true,
          "label": "Start Clock",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Start Clock"
          ],
          "stopAfter": 2.8
        },
        "245": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "143"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "246": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "245",
            "circle": "58"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "247": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "246"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "rgb(32,32,64)",
            "width": 1
          }
        },
        "248": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "246"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "249": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "246",
            "p1": "248"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "250": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "247",
            "circle": "249"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "251": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "250",
            "center": "246"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "252": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "251",
            "center": "246"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "253": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "250",
            "center": "246"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "254": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "253",
            "1": "251",
            "2": "246",
            "3": "252"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "black",
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "255": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "2",
            "p1": "143"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "256": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "255",
            "circle": "91"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "257": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "256",
            "text": "242"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 12,
            "color": "black"
          }
        },
        "258": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "227",
            "1": "231",
            "2": "225",
            "3": "233",
            "4": "2",
            "5": "50",
            "6": "143",
            "7": "146",
            "8": "210",
            "9": "211",
            "10": "213",
            "11": "214",
            "12": "215",
            "13": "216",
            "14": "217",
            "15": "218",
            "16": "219",
            "17": "220",
            "18": "221",
            "19": "148",
            "20": "149",
            "21": "150",
            "22": "151",
            "23": "152",
            "24": "153",
            "25": "154",
            "26": "155",
            "27": "156",
            "28": "157",
            "29": "158",
            "30": "159",
            "31": "160",
            "32": "161",
            "33": "162",
            "34": "164",
            "35": "165",
            "36": "166",
            "37": "167",
            "38": "168",
            "39": "169",
            "40": "170",
            "41": "171",
            "42": "172",
            "43": "173",
            "44": "174",
            "45": "175",
            "46": "176",
            "47": "177",
            "48": "178",
            "49": "179",
            "50": "180",
            "51": "181",
            "52": "182",
            "53": "183",
            "54": "184",
            "55": "185",
            "56": "186",
            "57": "187",
            "58": "188",
            "59": "189",
            "60": "190",
            "61": "191",
            "62": "192",
            "63": "193",
            "64": "194",
            "65": "195",
            "66": "196",
            "67": "197",
            "68": "198",
            "69": "199",
            "70": "200",
            "71": "201",
            "72": "202",
            "73": "203",
            "74": "205",
            "75": "206",
            "76": "207",
            "77": "208",
            "78": "209",
            "79": "247",
            "80": "254",
            "81": "19",
            "82": "20",
            "83": "21",
            "84": "22"
          },
          "geom": {
            "loc": {
              "x": 1473,
              "y": 386
            }
          },
          "latentVisibility": true,
          "label": "Hide Clock",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Clock",
            "Show Clock"
          ]
        },
        "259": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "16",
            "1": "143"
          },
          "geom": {
            "loc": {
              "x": 1235,
              "y": 476
            }
          },
          "latentVisibility": true,
          "label": "Move Clock Point Rest of Way",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Clock Point Rest of Way"
          ],
          "rate": 1,
          "towardInitialDestination": true
        },
        "260": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "244",
            "1": "259"
          },
          "geom": {
            "loc": {
              "x": 1242,
              "y": 520
            }
          },
          "latentVisibility": true,
          "label": "Move Clock One Rotation",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonPresentSequentially",
          "messages": [
            "Move Clock One Rotation"
          ],
          "waitTime": 0
        },
        "261": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "129"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1806,
              "y": 265
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "d",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "262": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "236",
            "1": "136",
            "2": "261"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1809,
              "y": 569
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/(@1*@2)",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "263": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "262",
            "1": "240",
            "2": "241",
            "3": "134"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1809,
              "y": 616
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "height vase",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "264": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "235",
            "coordY": "263",
            "coordSys": "119"
          },
          "constraint": "PlotMarkedXMarkedY",
          "latentVisibility": true,
          "label": "N[2]",
          "style": {
            "hidden": true,
            "traced": true,
            "color": "blue"
          }
        },
        "265": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "144",
            "1": "234",
            "2": "235",
            "3": "236",
            "4": "262",
            "5": "237",
            "6": "238",
            "7": "239",
            "8": "240",
            "9": "241",
            "10": "263",
            "11": "264",
            "drivenObject": "264",
            "domainObject": "50",
            "driverObject": "143"
          },
          "constraint": "GeomLocus",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3,
            "endpointRadius": 2.5,
            "arrowheadRadius": 8
          },
          "numSamples": 250,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "266": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1801,
              "y": 146
            }
          },
          "textMFS": "<VL<T'vase calculations'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "267": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1957,
              "y": 523
            }
          },
          "textMFS": "<VL<T'height of vase 2'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "268": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1810,
              "y": 530
            }
          },
          "textMFS": "<VL<T'height of vase 1'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "269": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "133"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1803,
              "y": 214
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2",
          "latentVisibility": true,
          "label": "m[14]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "270": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "269",
            "1": "131"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 174
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2",
          "latentVisibility": true,
          "label": "(b-a)/2[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "271": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "131",
            "1": "270"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 240
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1+@1",
          "latentVisibility": true,
          "label": "b[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "272": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "140",
            "1": "135",
            "2": "261",
            "3": "236",
            "4": "271"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1955,
              "y": 547
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*@3*(@4-@0)+@0^2*@1^2*@2)))/((@4-@0)*sqrt(@2))",
          "latentVisibility": true,
          "label": "h[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "273": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "270"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 196
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "274": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "269",
            "1": "130"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2105,
              "y": 196
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2",
          "latentVisibility": true,
          "label": "(b-a)/2[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "275": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "130",
            "1": "274"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2105,
              "y": 218
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1+@1",
          "latentVisibility": true,
          "label": "b[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "276": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "130"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2105,
              "y": 240
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "a[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "277": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "141",
            "1": "135",
            "2": "261",
            "3": "236",
            "4": "275"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2398,
              "y": 549
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*@3*(@4-@0)+@0^2*@1^2*@2)))/((@4-@0)*sqrt(@2))",
          "latentVisibility": true,
          "label": "m[20]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "278": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "272",
            "1": "240",
            "2": "241",
            "3": "135"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1955,
              "y": 606
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0*@1+@2*@3)",
          "latentVisibility": true,
          "label": "m[17]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "279": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "235",
            "coordY": "278",
            "coordSys": "119"
          },
          "constraint": "PlotMarkedXMarkedY",
          "latentVisibility": true,
          "label": "Y[1]",
          "style": {
            "hidden": true,
            "traced": true,
            "color": "lime"
          }
        },
        "280": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "144",
            "1": "234",
            "2": "235",
            "3": "236",
            "4": "237",
            "5": "238",
            "6": "239",
            "7": "240",
            "8": "241",
            "9": "272",
            "10": "278",
            "11": "279",
            "drivenObject": "279",
            "domainObject": "50",
            "driverObject": "143"
          },
          "constraint": "GeomLocus",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "lime",
            "line-style": "solid",
            "width": 3,
            "endpointRadius": 2.5,
            "arrowheadRadius": 8
          },
          "numSamples": 250,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "281": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "277",
            "1": "240",
            "2": "241",
            "3": "135"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2411,
              "y": 614
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "h[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "282": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "235",
            "coordY": "281",
            "coordSys": "119"
          },
          "constraint": "PlotMarkedXMarkedY",
          "latentVisibility": true,
          "label": "Z[1]",
          "style": {
            "hidden": true,
            "traced": true,
            "color": "red"
          }
        },
        "283": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "144",
            "1": "234",
            "2": "235",
            "3": "236",
            "4": "237",
            "5": "238",
            "6": "239",
            "7": "240",
            "8": "241",
            "9": "277",
            "10": "281",
            "11": "282",
            "drivenObject": "282",
            "domainObject": "50",
            "driverObject": "143"
          },
          "constraint": "GeomLocus",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "red",
            "line-style": "solid",
            "width": 3,
            "endpointRadius": 2.5,
            "arrowheadRadius": 8
          },
          "numSamples": 250,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "284": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 1
            }
          },
          "textMFS": "<VL<T'vase parameters'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "285": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2395,
              "y": 522
            }
          },
          "textMFS": "<VL<T'height of vase 3'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "286": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "279",
            "coordSys": "119"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 1646,
              "y": 548
            }
          },
          "latentVisibility": true,
          "label": "m[21]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "287": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "286"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1646,
              "y": 571
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "latentVisibility": true,
          "label": "m[18]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "288": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "282",
            "coordSys": "119"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 1646,
              "y": 594
            }
          },
          "latentVisibility": true,
          "label": "m[19]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "289": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "288"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1646,
              "y": 617
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "290": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1639,
              "y": 505
            }
          },
          "textMFS": "<VL<T'needed to plot the'><T'height point to fill vase'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "291": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "17",
            "1": "143"
          },
          "geom": {
            "loc": {
              "x": 1204,
              "y": 615
            }
          },
          "latentVisibility": true,
          "label": "Reset Clock",
          "style": {
            "hidden": true,
            "color": "blue",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Reset Clock"
          ],
          "rate": 0,
          "towardInitialDestination": true
        },
        "292": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "291"
          },
          "geom": {
            "loc": {
              "x": 266,
              "y": 26
            }
          },
          "label": "Reset",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ],
          "stopAfter": "firstActionStops"
        },
        "293": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "260"
          },
          "geom": {
            "loc": {
              "x": 266,
              "y": 2
            }
          },
          "label": "Start",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Start"
          ],
          "stopAfter": "firstActionStops"
        },
        "294": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "283"
          },
          "value": 0.5640430921353801,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "295": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "119"
          },
          "coordX": 0,
          "coordY": 4,
          "constraint": "PlotFixedXFixedY",
          "label": "A[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "296": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "295",
            "obj0": "101"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1981,
              "y": 21
            }
          },
          "latentVisibility": true,
          "label": "vertical scale for height of 4",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "297": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "296"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1981,
              "y": 38
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/4",
          "latentVisibility": true,
          "label": "vert scale",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "298": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "138",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1961,
              "y": 299
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "a[vase2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "299": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "271",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1961,
              "y": 320
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "b[vase[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "300": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "276",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2088,
              "y": 291
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "a[vase3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "301": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "275",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2088,
              "y": 313
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "b[vase3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "302": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "135",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1815,
              "y": 304
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "h[vases]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "303": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "136",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1815,
              "y": 325
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "b[vase1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "304": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "137",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1815,
              "y": 346
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "offest[vase1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "305": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "115"
          },
          "value": -129.95848647505113,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "R[2]",
          "style": {
            "radius": 2
          }
        },
        "306": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "305",
            "distance": "303"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "color": "aqua",
            "radius": 2
          }
        },
        "307": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "306",
            "measureX": "304",
            "measureY": "302"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "308": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "305",
            "measureX": "304",
            "measureY": "302"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "label": "R[2]'",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": -32,
              "labelOffsetY": -15,
              "font-family": 0
            },
            "radius": 2
          }
        },
        "309": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "306",
            "p1": "307"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "310": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "307",
            "p1": "308"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "311": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "308",
            "p1": "305"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "312": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "305",
            "p1": "306"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "313": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "263",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1812,
              "y": 370
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "height[vase1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "314": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "305",
            "distance": "313"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "315": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "314",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "316": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "315"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "317": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "315"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "318": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "317",
            "1": "316",
            "2": "306",
            "3": "305"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "blue",
            "opacity": 0.7499961853027344,
            "layerOrder": 2
          }
        },
        "319": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "115"
          },
          "value": -91.87762764747801,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "I[2]",
          "style": {
            "radius": 2
          }
        },
        "320": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "319",
            "distance": "298"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "I'[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "321": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "320",
            "distance": "302"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "322": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "319",
            "distance": "302"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "323": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "322",
            "p1": "321"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "324": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "323"
          },
          "constraint": "Midpoint",
          "label": "H[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "325": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "299"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1961,
              "y": 336
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "326": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "324",
            "distance": "325"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "H'[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "327": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "324",
            "distance": "325"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "H'[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "328": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "319",
            "p1": "320"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "329": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "320",
            "p1": "326"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "330": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "326",
            "p1": "327"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "331": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "327",
            "p1": "319"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "332": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "287",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1959,
              "y": 381
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "height[vase2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "333": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "319",
            "distance": "332"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "334": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "333",
            "line": "323"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "335": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "334"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "336": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "329",
            "line1": "334"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "337": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "115"
          },
          "value": -39.692747031914834,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "radius": 2
          }
        },
        "338": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "337",
            "distance": "300"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "color": "aqua",
            "radius": 2
          }
        },
        "339": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "338",
            "distance": "302"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "340": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "337",
            "distance": "302"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "341": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "301"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2088,
              "y": 335
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "342": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "340",
            "p1": "339"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "343": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "342"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "344": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "343",
            "distance": "341"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "345": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "343",
            "distance": "341"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "346": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "345",
            "p1": "344"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "347": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "344",
            "p1": "338"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "348": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "338",
            "p1": "337"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "349": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "337",
            "p1": "345"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "350": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "288",
            "1": "297"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2097,
              "y": 385
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "height[vase3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "351": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "337",
            "distance": "350"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "352": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "351",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "353": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "352"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "354": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "347",
            "line1": "352"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "355": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "327",
            "p1": "319"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "356": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "326",
            "p1": "320"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "357": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "333",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "358": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "357",
            "line1": "356"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "359": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "355",
            "line1": "357"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "360": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "359",
            "1": "358",
            "2": "320",
            "3": "319"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "lime",
            "opacity": 0.7499961853027344,
            "layerOrder": 3
          }
        },
        "361": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "338",
            "p1": "344"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "362": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "337",
            "p1": "345"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "363": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "352",
            "line1": "362"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "364": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "352",
            "line1": "361"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "365": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "363",
            "1": "364",
            "2": "338",
            "3": "337"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "red",
            "opacity": 0.7499961853027344,
            "layerOrder": 4
          }
        },
        "366": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "115"
          },
          "value": 69.10970676115122,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "367": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "104"
          },
          "value": 4.831791789455256,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "368": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "73",
            "p0": "70",
            "p1": "101"
          },
          "constraint": "TranslateVector",
          "label": "0",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -4,
              "labelOffsetY": 2,
              "labelParam": 0
            }
          }
        },
        "369": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "368",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "label": "10",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": 4,
              "labelParam": 0
            }
          }
        },
        "370": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "369",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "label": "20",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": 4,
              "labelParam": 0
            }
          }
        },
        "371": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "370",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "label": "30",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": 4,
              "labelParam": 0
            }
          }
        },
        "372": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "371",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "label": "40",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": 5,
              "labelParam": 0
            }
          }
        },
        "373": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "372",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "label": "50",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": 4,
              "labelParam": 0
            }
          }
        },
        "374": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "373",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "label": "60",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": 3,
              "labelParam": 0
            }
          }
        },
        "375": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1450,
              "y": 82
            }
          },
          "latentVisibility": true,
          "label": "B[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "376": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "375",
            "distance": "69"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "377": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "375",
            "distance": "69"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "378": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "377",
            "p1": "376"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "label": "n",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "379": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "378",
            "p0": "375",
            "p1": "101"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "380": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "119"
          },
          "coordX": 0,
          "coordY": 1,
          "constraint": "PlotFixedXFixedY",
          "label": "C[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "381": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "379",
            "p0": "101",
            "p1": "380"
          },
          "constraint": "TranslateVector",
          "label": "1",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -11,
              "labelOffsetY": -14,
              "labelParam": 0
            }
          }
        },
        "382": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "381",
            "p0": "101",
            "p1": "380"
          },
          "constraint": "TranslateVector",
          "label": "2",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": -14,
              "labelParam": 0
            }
          }
        },
        "383": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "382",
            "p0": "101",
            "p1": "380"
          },
          "constraint": "TranslateVector",
          "label": "3",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -13,
              "labelOffsetY": -13,
              "labelParam": 0
            }
          }
        },
        "384": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "383",
            "p0": "101",
            "p1": "380"
          },
          "constraint": "TranslateVector",
          "label": "4",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -15,
              "labelOffsetY": -13,
              "labelParam": 0
            }
          }
        },
        "385": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1469,
              "y": 108
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.1 cm",
          "latentVisibility": true,
          "label": "slider tick",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "386": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1527,
              "y": 86
            }
          },
          "label": "D[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "387": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "386",
            "distance": "385"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "388": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "386",
            "distance": "385"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "389": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "388",
            "p1": "387"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "390": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "119"
          },
          "coordX": 0,
          "coordY": 0.5,
          "constraint": "PlotFixedXFixedY",
          "label": "E[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "391": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "389",
            "p0": "386",
            "p1": "390"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "392": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "391",
            "p0": "101",
            "p1": "380"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "393": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "392",
            "p0": "101",
            "p1": "380"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "394": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "393",
            "p0": "101",
            "p1": "380"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "395": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "394",
            "p0": "101",
            "p1": "380"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "396": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "119"
          },
          "coordX": 5,
          "coordY": 0,
          "constraint": "PlotFixedXFixedY",
          "label": "G[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "397": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1525,
              "y": 72
            }
          },
          "label": "F[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "398": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "397",
            "distance": "385"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "399": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "397",
            "distance": "385"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "400": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "399",
            "p1": "398"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "401": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "400",
            "p0": "397",
            "p1": "396"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "402": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "401",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "403": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "402",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "404": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "403",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "405": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "404",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "406": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "405",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "407": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "406",
            "p0": "101",
            "p1": "120"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "408": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "101",
            "p1": "366"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(32,32,64)"
          }
        },
        "409": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "366"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "410": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "366",
            "p1": "409"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "411": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "408",
            "circle": "410"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "412": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "411",
            "center": "366"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "413": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "412",
            "center": "366"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "414": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "411",
            "center": "366"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "415": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "414",
            "1": "412",
            "2": "366",
            "3": "413"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "black",
            "opacity": 1,
            "layerOrder": 5
          }
        },
        "416": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "101",
            "p1": "367"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(32,32,64)"
          }
        },
        "417": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "367"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "418": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "367",
            "p1": "417"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "419": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "416",
            "circle": "418"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "420": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "419",
            "center": "367"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "421": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "420",
            "center": "367"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "422": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "419",
            "center": "367"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "423": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "422",
            "1": "420",
            "2": "367",
            "3": "421"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "black",
            "opacity": 1,
            "layerOrder": 6
          }
        },
        "424": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1046,
              "y": 398
            }
          },
          "textMFS": "<T'time (s)'>",
          "style": {
            "font-size": 18,
            "color": "black"
          }
        },
        "425": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 672,
              "y": 102
            }
          },
          "textMFS": "<T'height (cm)'>",
          "style": {
            "font-size": 18,
            "color": "black"
          }
        },
        "426": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "48"
          },
          "geom": {
            "loc": {
              "x": 266,
              "y": 50
            }
          },
          "label": "Erase Traces",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Erase Traces"
          ],
          "stopAfter": "firstActionStops",
          "eraseAnyTraces": true
        },
        "427": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "142"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1225,
              "y": 649
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "428": {
          "kind": "Expression",
          "genus": "Function",
          "parents": {
            "0": "427"
          },
          "constraint": "Function",
          "geom": {
            "loc": {
              "x": 1225,
              "y": 669
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "q",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "-5/6*x^2+5/4*x-@0",
          "latentVisibility": true,
          "label": "q",
          "style": {
            "hidden": true,
            "font-family": 0
          }
        },
        "429": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "282",
            "coordSys": "119"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 191
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "430": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "282",
            "coordSys": "119"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 215
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "431": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41",
            "1": "430"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/(75/2*@1+25)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "432": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "430",
            "1": "431",
            "2": "429"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1*@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "433": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 173
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "latentVisibility": true,
          "label": "zero",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "434": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "433",
            "coordY": "432",
            "coordSys": "119"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "435": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2360,
              "y": 293
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "436": {
          "kind": "Expression",
          "genus": "Function",
          "parents": {
            "0": "276",
            "1": "135",
            "2": "261",
            "3": "435",
            "4": "275",
            "5": "240",
            "6": "134",
            "7": "241"
          },
          "constraint": "Function",
          "geom": {
            "loc": {
              "x": 2360,
              "y": 371
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "s",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*@3*x*(@4-@0)+@0^2*@1^2*@2)))/((@4-@0)*sqrt(@2))*@5+@6*@7",
          "latentVisibility": true,
          "label": "s",
          "style": {
            "hidden": true,
            "font-family": 0
          }
        },
        "437": {
          "kind": "Sampler",
          "genus": "FunctionPlot",
          "parents": {
            "function": "436",
            "coordSys": "119"
          },
          "constraint": "FunctionPlot",
          "style": {
            "hidden": true,
            "color": "purple",
            "line-style": "solid",
            "width": 1,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 500,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": -12.614855900459759,
            "high": 395.51706814034935
          }
        },
        "438": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "282",
            "coordSys": "119"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 782,
              "y": 653
            }
          },
          "label": "m[23]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "439": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "282",
            "coordSys": "119"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 782,
              "y": 653
            }
          },
          "label": "m[22]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "440": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "438"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 782,
              "y": 653
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "441": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "408",
            "line1": "374"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "442": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "441",
            "line": "416"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "443": {
          "kind": "Expression",
          "genus": "Function",
          "parents": {
            "0": "140",
            "1": "135",
            "2": "261",
            "3": "435",
            "4": "271",
            "5": "240",
            "6": "241"
          },
          "constraint": "Function",
          "geom": {
            "loc": {
              "x": 2360,
              "y": 311
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "t",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*@3*x*(@4-@0)+@0^2*@1^2*@2)))/((@4-@0)*sqrt(@2))*@5+@1*@6",
          "latentVisibility": true,
          "label": "t",
          "style": {
            "hidden": true,
            "font-family": 0
          }
        },
        "444": {
          "kind": "Sampler",
          "genus": "FunctionPlot",
          "parents": {
            "function": "443",
            "coordSys": "119"
          },
          "constraint": "FunctionPlot",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 500,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": -21.273067199925976,
            "high": 381.61453237790204
          }
        },
        "445": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "279",
            "coordSys": "119"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "label": "m[25]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "446": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "279",
            "coordSys": "119"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "label": "m[24]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "447": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "445"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 725,
              "y": 601
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "448": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2357,
              "y": 264
            }
          },
          "textMFS": "<VL<T'functions to draw the tangents to the curves'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "449": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2687,
              "y": 92
            }
          },
          "textMFS": "<VL<T'alternate tangent calculation'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "450": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "282",
            "coordSys": "119"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 2367,
              "y": 100
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "451": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "264",
            "coordSys": "119"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 2367,
              "y": 123
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "452": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "279",
            "coordSys": "119"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 2367,
              "y": 146
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "453": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "282",
            "coordSys": "119"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 2428,
              "y": 97
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "454": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "264",
            "coordSys": "119"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 2428,
              "y": 120
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "455": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "279",
            "coordSys": "119"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 2428,
              "y": 143
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "456": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 158
            }
          },
          "textMFS": "<VL<T'=({1},{2})'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "457": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 178
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm",
          "latentVisibility": true,
          "label": "point label rad",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "458": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "279",
            "radius": "457"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "459": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "264",
            "radius": "457"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "460": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "282",
            "radius": "457"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "461": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "458"
          },
          "value": 0.012354852559769425,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "462": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "459"
          },
          "value": 0.9975768299482939,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "463": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "460"
          },
          "value": 0.0037815614084116423,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "464": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "450",
            "1": "453"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 98
            }
          },
          "textMFS": "<VL<H<0><H<T'('><?xC0001><H<T','><?xC0002><T')'>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "465": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "451",
            "1": "454"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 118
            }
          },
          "textMFS": "<VL<H<0><H<T'('><?xC0001><H<T','><?xC0002><T')'>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "466": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "452",
            "1": "455"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 138
            }
          },
          "textMFS": "<VL<H<0><H<T'('><?xC0001><H<T','><?xC0002><T')'>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "467": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "463",
            "text": "464"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "color": "red"
          }
        },
        "468": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "461",
            "text": "466"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12,
            "color": "green"
          }
        },
        "469": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "462",
            "text": "465"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-size": 12
          }
        },
        "470": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2362,
              "y": 68
            }
          },
          "textMFS": "<VL<T'measurements etc to label coordinates of the points'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "471": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 597,
              "y": 22
            }
          },
          "textMFS": "<H<T'cm'><+<0><T'3'>><T'/s'>>",
          "style": {
            "color": "black"
          }
        },
        "472": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "467"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 501
            }
          },
          "label": "Show Label",
          "style": {
            "color": "red"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Label",
            "Show Label"
          ],
          "fade": true
        },
        "473": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "468"
          },
          "geom": {
            "loc": {
              "x": 282,
              "y": 501
            }
          },
          "label": "Show Label",
          "style": {
            "color": "lime"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Label",
            "Show Label"
          ],
          "fade": true
        },
        "474": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "469"
          },
          "geom": {
            "loc": {
              "x": 78,
              "y": 503
            }
          },
          "label": "Show Label",
          "style": {
            "color": "blue"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Label",
            "Show Label"
          ],
          "fade": true
        },
        "475": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "282"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 476
            }
          },
          "label": "Show Point",
          "style": {
            "color": "red"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point",
            "Show Point"
          ],
          "fade": true
        },
        "476": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "279"
          },
          "geom": {
            "loc": {
              "x": 282,
              "y": 477
            }
          },
          "label": "Show Point",
          "style": {
            "color": "lime"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point",
            "Show Point"
          ],
          "fade": true
        },
        "477": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "264"
          },
          "geom": {
            "loc": {
              "x": 78,
              "y": 478
            }
          },
          "label": "Show Point",
          "style": {
            "color": "blue"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point",
            "Show Point"
          ],
          "fade": true
        },
        "478": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "479": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "480": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "481": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "482": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "483": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "484": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "485": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "486": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "487": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "488": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "309"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "489": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "490": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "491": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "492": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "493": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "494": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "495": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "496": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "497": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "498": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "499": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "500": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "501": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "502": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "503": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "504": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "505": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "506": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "507": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "508": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "509": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "510": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 1,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "style": {
            "color": "yellow",
            "radius": 2
          }
        },
        "511": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "478",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "512": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "479",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "513": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "480",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "514": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "481",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "515": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "482",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "516": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "483",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "517": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "484",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "518": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "485",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "519": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "486",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "520": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "487",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "521": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "488",
            "line": "310"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "522": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "511"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "523": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "512"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "524": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "513"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "525": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "514"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "526": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "515"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "527": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "516"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "528": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "517"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "529": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "518"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "530": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "519"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "531": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "520"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "532": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "311",
            "line1": "521"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "533": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "522",
            "p1": "478"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "534": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "479",
            "p1": "523"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "535": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "524",
            "p1": "480"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "536": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "481",
            "p1": "525"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "537": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "526",
            "p1": "482"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "538": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "483",
            "p1": "527"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "539": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "528",
            "p1": "484"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "540": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "485",
            "p1": "529"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "541": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "530",
            "p1": "486"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "542": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "487",
            "p1": "531"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "543": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "532",
            "p1": "488"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "544": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "489",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "545": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "490",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "546": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "491",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "547": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "492",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "548": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "493",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "549": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "494",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "550": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "495",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "551": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "496",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "552": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "497",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "553": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "498",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "554": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "499",
            "line": "330"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "555": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "544"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "556": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "545"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "557": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "546"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "558": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "547"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "559": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "548"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "560": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "549"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "561": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "550"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "562": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "551"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "563": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "552"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "564": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "553"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "565": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "331",
            "line1": "554"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "566": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "489",
            "p1": "555"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "567": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "556",
            "p1": "490"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "568": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "491",
            "p1": "557"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "569": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "558",
            "p1": "492"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "570": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "493",
            "p1": "559"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "571": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "560",
            "p1": "494"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "572": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "495",
            "p1": "561"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "573": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "562",
            "p1": "496"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "574": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "497",
            "p1": "563"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "575": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "564",
            "p1": "498"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "576": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "499",
            "p1": "565"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "577": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "500",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "578": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "501",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "579": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "502",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "580": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "503",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "581": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "504",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "582": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "505",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "583": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "506",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "584": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "507",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "585": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "508",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "586": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "509",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "587": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "510",
            "line": "346"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "588": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "577"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "589": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "578"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "590": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "579"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "591": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "580"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "592": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "581"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "593": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "582"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "594": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "583"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "595": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "349",
            "line1": "584"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "596": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "585",
            "line1": "349"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "597": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "586",
            "line1": "349"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "598": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "587",
            "line1": "349"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "599": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "500",
            "p1": "588"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "600": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "589",
            "p1": "501"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "601": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "502",
            "p1": "590"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "602": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "591",
            "p1": "503"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "603": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "504",
            "p1": "592"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "604": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "593",
            "p1": "505"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "605": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "506",
            "p1": "594"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "606": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "595",
            "p1": "507"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "607": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "508",
            "p1": "596"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "608": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "597",
            "p1": "509"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "609": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "510",
            "p1": "598"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "610": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "283"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 526
            }
          },
          "label": "Show Graph",
          "style": {
            "color": "red"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Graph",
            "Show Graph"
          ],
          "fade": true
        },
        "611": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "265"
          },
          "geom": {
            "loc": {
              "x": 78,
              "y": 528
            }
          },
          "label": "Show Graph",
          "style": {
            "color": "blue"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Graph",
            "Show Graph"
          ],
          "fade": true
        },
        "612": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "280"
          },
          "geom": {
            "loc": {
              "x": 282,
              "y": 525
            }
          },
          "label": "Show Graph",
          "style": {
            "color": "lime"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Graph",
            "Show Graph"
          ],
          "fade": true
        },
        "613": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "8",
            "2": "9",
            "3": "11",
            "4": "12",
            "5": "13",
            "6": "19",
            "7": "20",
            "8": "21",
            "9": "22",
            "10": "23",
            "11": "26",
            "12": "27",
            "13": "44",
            "14": "48",
            "15": "49",
            "16": "52",
            "17": "53",
            "18": "55",
            "19": "57",
            "20": "61",
            "21": "68",
            "22": "69",
            "23": "70",
            "24": "73",
            "25": "234",
            "26": "235",
            "27": "236",
            "28": "243",
            "29": "244",
            "30": "258",
            "31": "259",
            "32": "260",
            "33": "291",
            "34": "375",
            "35": "378",
            "36": "385",
            "37": "427",
            "38": "428",
            "39": "6",
            "40": "7",
            "41": "10",
            "42": "89",
            "43": "90",
            "44": "129",
            "45": "133",
            "46": "134",
            "47": "135",
            "48": "136",
            "49": "137",
            "50": "138",
            "51": "139",
            "52": "140",
            "53": "141",
            "54": "142",
            "55": "240",
            "56": "241",
            "57": "261",
            "58": "262",
            "59": "263",
            "60": "266",
            "61": "267",
            "62": "268",
            "63": "269",
            "64": "270",
            "65": "271",
            "66": "272",
            "67": "273",
            "68": "274",
            "69": "275",
            "70": "276",
            "71": "277",
            "72": "278",
            "73": "281",
            "74": "284",
            "75": "285",
            "76": "286",
            "77": "287",
            "78": "288",
            "79": "289",
            "80": "290",
            "81": "296",
            "82": "297",
            "83": "298",
            "84": "299",
            "85": "300",
            "86": "301",
            "87": "302",
            "88": "303",
            "89": "304",
            "90": "313",
            "91": "325",
            "92": "332",
            "93": "341",
            "94": "350",
            "95": "429",
            "96": "430",
            "97": "431",
            "98": "432",
            "99": "433",
            "100": "435",
            "101": "436",
            "102": "443",
            "103": "448",
            "104": "449",
            "105": "450",
            "106": "451",
            "107": "452",
            "108": "453",
            "109": "454",
            "110": "455",
            "111": "456",
            "112": "457",
            "113": "464",
            "114": "465",
            "115": "466",
            "116": "470"
          },
          "geom": {
            "loc": {
              "x": -93,
              "y": -34
            }
          },
          "label": "Show Objects",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "614": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "308",
            "line": "312"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "615": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "312",
            "line1": "614"
          },
          "constraint": "Intersection",
          "label": "Q[2]",
          "style": {
            "hidden": true,
            "label": {
              "showLabel": true,
              "labelOffsetX": 2,
              "labelOffsetY": 0,
              "font-family": 0
            }
          }
        },
        "616": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "615",
            "obj0": "308"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1011,
              "y": 606
            }
          },
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "617": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "616"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1011,
              "y": 630
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/12",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "618": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "615",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "619": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "618",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "620": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "619",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "621": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "620",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "622": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "621",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "623": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "622",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "624": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "623",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "625": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "624",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "626": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "625",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "627": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "626",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "628": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "627",
            "distance": "617"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "629": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "618",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "630": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "619",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "631": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "620",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "632": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "621",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "633": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "622",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "634": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "623",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "635": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "624",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "636": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "625",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "637": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "626",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "638": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "627",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "639": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "628",
            "line": "312"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "640": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "639"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "641": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "638"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "642": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "637"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "643": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "636",
            "line1": "309"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "644": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "635",
            "line1": "309"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "645": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "634"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "646": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "633"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "647": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "629"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "648": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "630"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "649": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "309",
            "line1": "631"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "650": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "632",
            "line1": "309"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "651": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "647",
            "1": "487",
            "2": "648",
            "3": "478",
            "4": "649",
            "5": "479",
            "6": "650",
            "7": "488",
            "8": "646",
            "9": "481",
            "10": "645",
            "11": "480",
            "12": "644",
            "13": "484",
            "14": "643",
            "15": "485",
            "16": "642",
            "17": "486",
            "18": "641",
            "19": "482",
            "20": "640",
            "21": "483"
          },
          "geom": {
            "loc": {
              "x": 428,
              "y": 841
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0,
          "towardInitialDestination": true
        },
        "652": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "510",
            "2": "320",
            "3": "499",
            "4": "306",
            "5": "479"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 535
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "653": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "509",
            "2": "320",
            "3": "498",
            "4": "306",
            "5": "478"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 555
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "654": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "508",
            "2": "320",
            "3": "497",
            "4": "306",
            "5": "487"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 575
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "655": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "506",
            "2": "320",
            "3": "495",
            "4": "306",
            "5": "483"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 615
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "656": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "505",
            "2": "320",
            "3": "494",
            "4": "306",
            "5": "482"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 635
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "657": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "504",
            "2": "320",
            "3": "493",
            "4": "306",
            "5": "486"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 655
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "658": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "503",
            "2": "320",
            "3": "492",
            "4": "306",
            "5": "485"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 675
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "659": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "502",
            "2": "320",
            "3": "491",
            "4": "306",
            "5": "484"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 695
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "660": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "501",
            "2": "320",
            "3": "490",
            "4": "306",
            "5": "480"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 715
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "661": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "500",
            "2": "320",
            "3": "489",
            "4": "479",
            "5": "481"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 734
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "662": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "338",
            "1": "507",
            "2": "320",
            "3": "496",
            "4": "306",
            "5": "485"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 595
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "663": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "306",
            "1": "488"
          },
          "geom": {
            "loc": {
              "x": 733,
              "y": 754
            }
          },
          "label": "Move Point",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Point"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "664": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "652",
            "1": "653",
            "2": "654",
            "3": "655",
            "4": "656",
            "5": "657",
            "6": "658",
            "7": "659",
            "8": "660",
            "9": "661",
            "10": "662",
            "11": "663"
          },
          "geom": {
            "loc": {
              "x": 58,
              "y": 631
            }
          },
          "label": "Reset Markings",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset Markings"
          ]
        },
        "665": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 265,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.0001",
          "label": "time",
          "style": {
            "font-size": 12,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "666": {
          "kind": "Expression",
          "genus": "AngleMeasure",
          "parents": {
            "0": "665"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 831,
              "y": 560
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-@0/60*360\u00b0",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 12,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "667": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "center": "2",
            "angle": "666"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "lime",
            "radius": 2
          }
        },
        "668": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "667",
            "1": "143"
          },
          "geom": {
            "loc": {
              "x": 335,
              "y": 78
            }
          },
          "label": "Goto",
          "style": {
            "color": "rgb(160,160,160)",
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Goto"
          ],
          "rate": 0
        },
        "669": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.79600500254004,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "670": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.05039554184617471,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "671": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.5114205978311258,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "672": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.4266916686230809,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "673": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.35517048426217274,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "674": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.2863905299638772,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "675": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.2245882521885967,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "676": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.16777002907261349,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "677": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.10596775129733334,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "678": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.20749909369930022,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "679": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.2684120932288636,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "680": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.3355602816866496,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "681": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.40510661973221385,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "682": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.4828066663762239,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "683": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.5672215318660119,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "684": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.6693827043053574,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "685": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.8266620550316465,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "686": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.7062971350096293,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "687": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "329"
          },
          "value": 0.6008843789655026,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "688": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.05018048074105891,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "689": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.1019805118370653,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "690": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "347"
          },
          "value": 0.152341653180405,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "radius": 2
          }
        },
        "691": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "670",
            "1": "489",
            "2": "677",
            "3": "490",
            "4": "676",
            "5": "491",
            "6": "675",
            "7": "492",
            "8": "674",
            "9": "493",
            "10": "673",
            "11": "494",
            "12": "672",
            "13": "495",
            "14": "671",
            "15": "496",
            "16": "687",
            "17": "497",
            "18": "686",
            "19": "498",
            "20": "685",
            "21": "499"
          },
          "geom": {
            "loc": {
              "x": 630,
              "y": 844
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "692": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "669",
            "1": "500",
            "2": "684",
            "3": "501",
            "4": "683",
            "5": "502",
            "6": "682",
            "7": "503",
            "8": "681",
            "9": "504",
            "10": "680",
            "11": "505",
            "12": "679",
            "13": "506",
            "14": "678",
            "15": "507",
            "16": "690",
            "17": "508",
            "18": "689",
            "19": "509",
            "20": "688",
            "21": "510"
          },
          "geom": {
            "loc": {
              "x": 838,
              "y": 844
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "693": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "677",
            "1": "490",
            "2": "675",
            "3": "492",
            "4": "673",
            "5": "494",
            "6": "671",
            "7": "496",
            "8": "686",
            "9": "498"
          },
          "geom": {
            "loc": {
              "x": 630,
              "y": 864
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "694": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "684",
            "1": "501",
            "2": "682",
            "3": "503",
            "4": "680",
            "5": "505",
            "6": "678",
            "7": "507",
            "8": "689",
            "9": "509"
          },
          "geom": {
            "loc": {
              "x": 838,
              "y": 864
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "695": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "648",
            "1": "478",
            "2": "650",
            "3": "488",
            "4": "645",
            "5": "480",
            "6": "643",
            "7": "485",
            "8": "641",
            "9": "482"
          },
          "geom": {
            "loc": {
              "x": 428,
              "y": 867
            }
          },
          "label": "Move Points",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Points"
          ],
          "shouldAutogenerateLabel": true,
          "rate": 0
        },
        "696": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "664",
            "1": "695",
            "2": "693",
            "3": "694"
          },
          "geom": {
            "loc": {
              "x": 58,
              "y": 587
            }
          },
          "label": "10 Second Markings",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSequentially",
          "messages": [
            "10 Second Markings"
          ],
          "waitTime": 0
        },
        "697": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "664",
            "1": "651",
            "2": "691",
            "3": "692"
          },
          "geom": {
            "loc": {
              "x": 58,
              "y": 609
            }
          },
          "label": "5 Second Markings",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSequentially",
          "messages": [
            "5 Second Markings"
          ],
          "waitTime": 0
        },
        "698": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "132",
            "1": "305",
            "2": "306",
            "3": "309",
            "4": "310",
            "5": "311",
            "6": "312",
            "7": "318",
            "8": "319",
            "9": "478",
            "10": "479",
            "11": "480",
            "12": "481",
            "13": "482",
            "14": "483",
            "15": "484",
            "16": "485",
            "17": "486",
            "18": "487",
            "19": "488",
            "20": "533",
            "21": "534",
            "22": "535",
            "23": "536",
            "24": "537",
            "25": "538",
            "26": "539",
            "27": "540",
            "28": "541",
            "29": "542",
            "30": "543"
          },
          "geom": {
            "loc": {
              "x": 78,
              "y": 453
            }
          },
          "label": "Hide Vase",
          "style": {
            "color": "blue"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Vase",
            "Show Vase"
          ],
          "fade": true
        },
        "699": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "131",
            "1": "319",
            "2": "328",
            "3": "329",
            "4": "330",
            "5": "331",
            "6": "360",
            "7": "489",
            "8": "490",
            "9": "491",
            "10": "492",
            "11": "493",
            "12": "494",
            "13": "495",
            "14": "496",
            "15": "497",
            "16": "498",
            "17": "499"
          },
          "geom": {
            "loc": {
              "x": 282,
              "y": 453
            }
          },
          "label": "Hide Vase",
          "style": {
            "color": "rgb(128,255,7)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Vase",
            "Show Vase"
          ],
          "fade": true
        },
        "700": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "130",
            "1": "337",
            "2": "338",
            "3": "346",
            "4": "347",
            "5": "348",
            "6": "349",
            "7": "365",
            "8": "500",
            "9": "501",
            "10": "502",
            "11": "503",
            "12": "504",
            "13": "505",
            "14": "506",
            "15": "507",
            "16": "508",
            "17": "509",
            "18": "510",
            "19": "599",
            "20": "600",
            "21": "601",
            "22": "602",
            "23": "603",
            "24": "604",
            "25": "605",
            "26": "606",
            "27": "607",
            "28": "608",
            "29": "609"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 451
            }
          },
          "label": "Hide Vase",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Vase",
            "Show Vase"
          ],
          "fade": true
        },
        "701": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "443",
            "1": "235"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1265,
              "y": 711
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0(@1)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "702": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "235",
            "coordY": "701",
            "coordSys": "119"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true
          }
        },
        "703": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "235"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1265,
              "y": 733
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+0.000001",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "704": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "443",
            "1": "703"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1265,
              "y": 755
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0(@1)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "705": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "703",
            "coordY": "704",
            "coordSys": "119"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true
          }
        },
        "706": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "705",
            "p1": "702"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black"
          }
        },
        "707": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "705",
            "p1": "702"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "line-style": "dashed"
          }
        },
        "708": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "707",
            "line1": "104"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "709": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "707",
            "line1": "442"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "710": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "709",
            "p1": "708"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(33,255,6)"
          }
        },
        "711": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "710"
          },
          "geom": {
            "loc": {
              "x": 282,
              "y": 548
            }
          },
          "label": "Show Tangent",
          "style": {
            "color": "rgb(33,255,6)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Tangent",
            "Show Tangent"
          ]
        },
        "712": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "436",
            "1": "235"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1265,
              "y": 777
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0(@1)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "713": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "436",
            "1": "703"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1265,
              "y": 799
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0(@1)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "714": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "235",
            "coordY": "712",
            "coordSys": "119"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true
          }
        },
        "715": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "703",
            "coordY": "713",
            "coordSys": "119"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true
          }
        },
        "716": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "715",
            "p1": "714"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "line-style": "dashed",
            "width": 1
          }
        },
        "717": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "716",
            "line1": "442"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "718": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "104",
            "line1": "716"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true
          }
        },
        "719": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "718",
            "p1": "717"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "720": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "719"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 549
            }
          },
          "label": "Show Tangent",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Tangent",
            "Show Tangent"
          ]
        }
      }
    },
    {
      "metadata": {
        "title": "2",
        "id": "2",
        "sketchRect": {
          "top": -80,
          "left": 74,
          "bottom": 710,
          "right": 1257
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "white"
          },
          "Straights": {
            "color": "rgb(170,30,189)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "rgb(170,30,189)"
          },
          "Plot": {
            "color": "rgb(53,127,188)"
          },
          "PointLocus": {
            "color": "rgb(171,30,191)"
          },
          "CoordSys": {
            "color": "rgb(160,160,160)"
          },
          "ActionButton": {
            "color": "rgb(170,30,189)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": false,
          "textTypes": {
            "Label": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 12,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 14,
              "color": "blue"
            },
            "Measurement": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 10
            },
            "Action": {
              "label": {
                "font-family": "\"Papyrus\", sans-serif",
                "font-size": 11
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif"
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1324,
              "y": 215
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "latentVisibility": true,
          "label": "speed",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "2": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 189,
              "y": 51
            }
          },
          "latentVisibility": true,
          "label": "C",
          "style": {
            "color": "black",
            "radius": 2
          }
        },
        "3": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 160,
              "y": 105
            }
          },
          "label": "E",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "4": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "p1": "3"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "green",
            "width": 1
          }
        },
        "5": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "2"
          },
          "angle": -1.5707963267949,
          "distance": 28.346456692913385,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "AngleParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1573,
              "y": 287
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-0.01\u00b0",
          "latentVisibility": true,
          "label": "angle end right",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "AngleParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1573,
              "y": 305
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.01\u00b0",
          "latentVisibility": true,
          "label": "ange end left",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "8": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1230,
              "y": 165
            }
          },
          "textMFS": "<VL<T'parameters which use the clock\\'s angle'><T'measurement and the speed to determine'><T'distance'><F1FxxFFFFFFFFx20xCx>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "9": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1306,
              "y": 260
            }
          },
          "textMFS": "<T'time in seconds'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "10": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1573,
              "y": 253
            }
          },
          "textMFS": "<VL<T'parameters used to position point on clock so'><T'angle will not measure 0 degrees'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "11": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1235,
              "y": 384
            }
          },
          "textMFS": "<VL<T'timed animation of point on clock for 2.8'><T'seconds, want it to go past half'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "12": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1235,
              "y": 456
            }
          },
          "textMFS": "<T'moves point rest of way just shy of 360 degreees'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "13": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1235,
              "y": 495
            }
          },
          "textMFS": "<T'calls above actions to move once around clock'>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "14": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "2",
            "p1": "5"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "15": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "14",
            "circle": "4"
          },
          "constraint": "Intersection2",
          "label": "B",
          "style": {
            "hidden": true,
            "color": "lime",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "16": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "center": "2",
            "angle": "7"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "17": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "15",
            "center": "2",
            "angle": "6"
          },
          "constraint": "RotateMeasureAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "18": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "15"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "navy",
            "width": 1
          }
        },
        "19": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1475,
              "y": 310
            }
          },
          "textMFS": "<VL<T'30'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 8,
            "color": "rgb(51,51,51)"
          }
        },
        "20": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1450,
              "y": 310
            }
          },
          "textMFS": "<VL<T'15'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 8,
            "color": "rgb(51,51,51)"
          }
        },
        "21": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1450,
              "y": 294
            }
          },
          "textMFS": "<VL<T'45'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 8,
            "color": "rgb(51,51,51)"
          }
        },
        "22": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1475,
              "y": 294
            }
          },
          "textMFS": "<VL<T' 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 8,
            "color": "black"
          }
        },
        "23": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 169
            }
          },
          "textMFS": "<VL<T'Parameters to create'><T'clock tick marks'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "24": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 411,
              "y": -1
            }
          },
          "label": "X",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1380,
              "y": 581
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6 pixels",
          "label": "radius",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1266,
              "y": 34
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "10",
          "latentVisibility": true,
          "label": "divisions",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "27": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1266,
              "y": 54
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "7 cm",
          "latentVisibility": true,
          "label": "len",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "distance": "27"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "selectable": false,
            "color": "red",
            "radius": 2
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "28",
            "p1": "24"
          },
          "constraint": "Segment",
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)"
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.4716918218306812,
          "constraint": "PointOnPath",
          "label": "Y",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "31": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "24",
            "obj0": "30"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1369,
              "y": 354
            }
          },
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "32": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "31",
            "1": "27",
            "2": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1372,
              "y": 386
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "trunc(@0/@1*@2)*@1/@2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "33": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "24",
            "distance": "32"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "34": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "31",
            "1": "32",
            "2": "33",
            "drivenObject": "33",
            "domainObject": "29",
            "driverObject": "30"
          },
          "constraint": "GeomLocus",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 300,
          "isDiscrete": true,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "35": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "34"
          },
          "value": 0.20066889632107013,
          "constraint": "PointOnPath",
          "label": "drag",
          "style": {
            "color": "rgb(160,160,160)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -14,
              "labelOffsetY": -21
            },
            "radius": 2
          }
        },
        "36": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "24",
            "obj0": "35"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 907,
              "y": 129
            }
          },
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "37": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "27"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 911,
              "y": 200
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2",
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "38": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1380,
              "y": 517
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2-trunc(@0/2)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "color": "red",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "39": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "38"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1379,
              "y": 558
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "even",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "40": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "39"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1134,
              "y": 258
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "label": "odd",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 9,
            "font-weight": "bold",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "41": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "36",
            "1": "37",
            "2": "27",
            "3": "26",
            "4": "40"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 418,
              "y": 23
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "((@0-@1)/(@2/@3)+@4*.5+5)*2",
          "label": "Change in Volume",
          "style": {
            "font-size": 14,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "42": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "35",
            "radius": "25"
          },
          "constraint": "CircleByRadius",
          "style": {
            "selectable": false,
            "width": 1
          }
        },
        "43": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "42"
          },
          "constraint": "CircleInterior",
          "style": {
            "color": "rgb(192,133,74)",
            "opacity": 0.7499961853027344,
            "layerOrder": 0
          }
        },
        "44": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1241,
              "y": 216
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "rate",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "45": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "29",
            "circle": "42"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "46": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "29",
            "circle": "42"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "47": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 179,
              "y": 577
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "48": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "47"
          },
          "geom": {
            "loc": {
              "x": 1240,
              "y": 551
            }
          },
          "latentVisibility": true,
          "label": "Dummy Hide for Erase Traces",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 1,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonHide",
          "messages": [
            "Dummy Hide for Erase Traces",
            "Dummy Hide for Erase Traces"
          ]
        },
        "49": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1268,
              "y": -2
            }
          },
          "textMFS": "<VL<T'parameter\\'s to control'><T'slider size etc'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "50": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "center": "2",
            "p0": "16",
            "p1": "15"
          },
          "constraint": "ArcAroundPoint",
          "latentVisibility": true,
          "style": {
            "selectable": false
          }
        },
        "51": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "50"
          },
          "value": 0.5848257546430977,
          "constraint": "PointOnPath",
          "label": "G",
          "style": {
            "hidden": true,
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "52": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "2",
            "obj0": "51"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 203
            }
          },
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 221
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-0.4 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "54": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "53"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-0.2 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "56": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "55"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "color": "blue",
            "width": 1
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1447,
              "y": 257
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-0.5 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "58": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "57"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "59": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "51"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "60": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "center": "2",
            "p0": "51",
            "p1": "15"
          },
          "constraint": "ArcAroundPoint",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "61": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "52"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1450,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-0.6 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "62": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "61"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "63": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 782,
              "y": 93
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "64": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 370,
              "y": 100
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 507,
              "y": 101
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 501,
              "y": 472
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 369,
              "y": 467
            }
          },
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 101,
              "y": -48
            }
          },
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "69": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "68"
          },
          "geom": {
            "loc": {
              "x": -94,
              "y": -6
            }
          },
          "label": "Scroll",
          "style": {
            "color": "rgb(160,160,160)",
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonScroll",
          "messages": [
            "Scroll"
          ],
          "shouldAutogenerateLabel": true,
          "scrollDest": "topLeft"
        },
        "70": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "27",
            "1": "26"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1483,
              "y": 4
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "71": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1483,
              "y": 42
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.2 cm",
          "latentVisibility": true,
          "label": "slider tick",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "72": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1486,
              "y": 49
            }
          },
          "latentVisibility": true,
          "label": "G[1]",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "73": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "72",
            "distance": "71"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "74": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "72",
            "distance": "71"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "75": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "74",
            "p1": "73"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "label": "m",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "76": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "75",
            "p0": "72",
            "p1": "24"
          },
          "constraint": "TranslateVector",
          "label": "0",
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -4,
              "labelOffsetY": 5,
              "labelParam": 0
            },
            "width": 1
          }
        },
        "77": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "76",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "78": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "77",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "79": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "78",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "80": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "79",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "81": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "80",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "82": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "81",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "83": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "82",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "84": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "83",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "85": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "84",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "86": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "85",
            "distance": "70"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "label": "20",
          "style": {
            "selectable": false,
            "color": "rgb(160,160,160)",
            "label": {
              "showLabel": true,
              "labelOffsetX": -6,
              "labelOffsetY": 1,
              "labelParam": 0
            },
            "width": 1
          }
        },
        "87": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1490,
              "y": -16
            }
          },
          "textMFS": "<VL<T'Slider ticks'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "88": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 174,
              "y": 57
            }
          },
          "textMFS": "<T'secs'>",
          "style": {
            "font-size": 12,
            "color": "black"
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -507,
              "y": 25
            }
          },
          "label": "H[1]",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "90": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1577,
              "y": 226
            }
          },
          "textMFS": "<VL<T'={1} s'>>",
          "latentVisibility": true,
          "label": "t[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "91": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1577,
              "y": 208
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2.8 cm",
          "latentVisibility": true,
          "label": "rad clock s label",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "92": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1577,
              "y": 168
            }
          },
          "textMFS": "<VL<T'parameters for clock time label'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "93": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "2",
            "radius": "91"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "94": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 858,
              "y": 130
            }
          },
          "label": "First Eighth",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -56,
              "labelOffsetY": -6,
              "font-family": 1,
              "font-size": 10
            },
            "radius": 2
          }
        },
        "95": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -59,
              "y": 63
            }
          },
          "label": "Origin",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -5,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 16
            },
            "radius": 2
          }
        },
        "96": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "origin": "95"
          },
          "value": 10,
          "constraint": "HorizontalUnitPoint",
          "label": "Unit Point",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": -8,
              "font-family": 1,
              "font-size": 16
            },
            "radius": 2
          }
        },
        "97": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "95",
            "obj0": "96"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1210,
              "y": 576
            }
          },
          "label": "unit scale",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 12,
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "98": {
          "kind": "Point",
          "genus": "OriginPoint",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 678,
              "y": 379
            }
          },
          "label": "0",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": -8,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "99": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "origin": "98"
          },
          "value": 4.963123359580095,
          "constraint": "HorizontalUnitPoint",
          "label": "M",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "100": {
          "kind": "Point",
          "genus": "UnitPoint",
          "parents": {
            "unitPoint": "99"
          },
          "unitDistance": 26.49666666666667,
          "constraint": "UnitPointInternalRectangle",
          "label": "L",
          "style": {
            "hidden": true,
            "color": "red",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "101": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "98",
            "unitPoint": "100"
          },
          "constraint": "AxisInternalDist",
          "orientation": "vertical",
          "label": "y",
          "style": {
            "hidden": true,
            "color": "navy",
            "label": {
              "showLabel": false,
              "font-family": 3,
              "font-size": 10,
              "color": "navy"
            },
            "width": 1
          }
        },
        "102": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "2",
            "line": "101"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "102",
            "circle": "54"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "104": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "101"
          },
          "value": -12.869543338784752,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "105": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "104"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "106": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "104",
            "p1": "105"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "107": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "98",
            "p1": "104"
          },
          "constraint": "Segment",
          "label": "k",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "108": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "107",
            "circle": "106"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "109": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "108",
            "center": "104"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "110": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "108",
            "center": "104"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "111": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "110",
            "center": "104"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "112": {
          "kind": "Axis",
          "genus": "Axis",
          "parents": {
            "origin": "98",
            "unitPoint": "99"
          },
          "constraint": "AxisInternalDist",
          "orientation": "horizontal",
          "label": "x",
          "style": {
            "hidden": true,
            "color": "navy",
            "label": {
              "showLabel": false,
              "font-family": 3,
              "font-size": 10,
              "color": "navy"
            },
            "width": 1
          }
        },
        "113": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "112"
          },
          "value": 65.88593035246777,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "114": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "113"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "115": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "113",
            "p1": "114"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "116": {
          "kind": "CoordSys",
          "genus": "CoordSys",
          "parents": {
            "axisX": "112",
            "axisY": "101"
          },
          "constraint": "CoordSys",
          "shape": "rectangular",
          "style": {
            "hidden": true,
            "grid": "gridlines"
          }
        },
        "117": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "116"
          },
          "coordX": 10,
          "coordY": 0,
          "constraint": "PlotFixedXFixedY",
          "label": "U",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "118": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "116"
          },
          "coordX": 5,
          "coordY": 1,
          "constraint": "PlotFixedXFixedY",
          "label": "V",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "116"
          },
          "coordX": 0,
          "coordY": -200,
          "constraint": "PlotFixedXFixedY",
          "label": "O",
          "style": {
            "hidden": true,
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 1,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "120": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "116"
          },
          "coordX": 0,
          "coordY": -100,
          "constraint": "PlotFixedXFixedY",
          "label": "S",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "121": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "98",
            "p1": "113"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(32,32,64)",
            "width": 1
          }
        },
        "122": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "121",
            "circle": "115"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "123": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "122",
            "center": "113"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "122",
            "center": "113"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "113"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "126": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "52.5 cm",
          "latentVisibility": true,
          "label": "depth",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "127": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.5 cm",
          "latentVisibility": true,
          "label": "vase base 3",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "128": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 77
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "3.25 cm",
          "latentVisibility": true,
          "label": "vase base 2",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "129": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 59
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0 cm",
          "latentVisibility": true,
          "label": "vase width 1 offset",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "130": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 41
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "2 cm",
          "latentVisibility": true,
          "label": "width vase 1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "131": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 23
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4 cm",
          "latentVisibility": true,
          "label": "height vase",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "132": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "131"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1806,
              "y": 243
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "H",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "133": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "130"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1803,
              "y": 170
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "width[v1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "134": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "129"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1803,
              "y": 192
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "width offset[v1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "135": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "128"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "a[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "136": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "130"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1339,
              "y": 863
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "base vase 1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "137": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "128"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 218
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "a[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "138": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "127"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2105,
              "y": 174
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "a[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "139": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "136",
            "1": "131",
            "2": "126"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1619,
              "y": 694
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*@2",
          "latentVisibility": true,
          "label": "V[lp]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "140": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "50"
          },
          "value": 0.9999722214505958,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "D",
          "style": {
            "radius": 2
          }
        },
        "141": {
          "kind": "Arc",
          "genus": "SimpleArc",
          "parents": {
            "center": "2",
            "p0": "140",
            "p1": "15"
          },
          "constraint": "ArcAroundPoint",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "142": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "102",
            "circle": "141"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "143": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "142"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "144": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "143",
            "circle": "56"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "145": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "144",
            "p1": "142"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "146": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "145",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "147": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "146",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "148": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "147",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "149": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "148",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "150": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "149",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "151": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "150",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "152": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "151",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "153": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "152",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "154": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "153",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "155": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "154",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "156": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "155",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "157": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "156",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "158": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "157",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "159": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "158",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "160": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "159",
            "circle": "56"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "161": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "159",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "162": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "161",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "163": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "162",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "164": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "163",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "165": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "164",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "166": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "165",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "167": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "166",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "168": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "167",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "169": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "168",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "170": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "169",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "171": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "170",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "172": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "171",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "173": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "172",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "174": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "173",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "175": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "174",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "176": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "175",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "177": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "176",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "178": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "177",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "179": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "178",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "180": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "179",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "181": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "180",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "182": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "181",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "183": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "182",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "184": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "183",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "185": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "184",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "186": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "185",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "187": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "186",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "188": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "187",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "189": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "188",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "190": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "189",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "191": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "190",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "192": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "191",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "193": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "192",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "194": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "193",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "195": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "194",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "196": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "195",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "197": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "196",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "198": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "197",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "199": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "198",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "200": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "199",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "201": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "200",
            "circle": "50"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "202": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "200",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "203": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "202",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "204": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "203",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "205": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "204",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "206": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "205",
            "center": "2"
          },
          "angle": -0.10471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "207": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "143",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "208": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "207",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "209": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "208",
            "circle": "56"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "210": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "208",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "211": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "210",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "212": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "211",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "213": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "212",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "214": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "213",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "215": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "214",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "216": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "215",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "217": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "216",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "218": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "217",
            "center": "2"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "black",
            "width": 1
          }
        },
        "219": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "216",
            "circle": "50"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "220": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "219",
            "line": "216"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "221": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "220",
            "circle": "62"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "222": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "221",
            "text": "20"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 12,
            "color": "rgb(51,51,51)"
          }
        },
        "223": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "220",
            "circle": "62"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "224": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "223",
            "text": "21"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 12,
            "color": "rgb(51,51,51)"
          }
        },
        "225": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "213",
            "circle": "50"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "226": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "225",
            "line": "213"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "227": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "226",
            "circle": "62"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "228": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "227",
            "text": "19"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 12,
            "color": "rgb(51,51,51)"
          }
        },
        "229": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "226",
            "circle": "62"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "230": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "229",
            "text": "22"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 12,
            "color": "black"
          }
        },
        "231": {
          "kind": "Measure",
          "genus": "AngleMeasure",
          "parents": {
            "arc": "141"
          },
          "constraint": "MeasurementArcAngle",
          "geom": {
            "loc": {
              "x": 1236,
              "y": 236
            }
          },
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "232": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "231"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1233,
              "y": 259
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/360*60/1\u00b0",
          "latentVisibility": true,
          "label": "time",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromLabel"
          }
        },
        "233": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41",
            "1": "232"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1233,
              "y": 291
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1*1 cm^3",
          "latentVisibility": true,
          "label": "V[w]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "234": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "139",
            "1": "233"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 270,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "label": "m[11]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "235": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "234"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 270,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(@0)",
          "label": "m[10]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "236": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "235"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 270,
              "y": 262
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(1+@0)",
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "237": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "236"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1627,
              "y": 784
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "V[w] <= 420",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "238": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "237"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1619,
              "y": 658
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[9]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "239": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "232"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 1577,
              "y": 187
            }
          },
          "textMFS": "<VL<H<0><H<?1xC0001<H<T'0.0'>>><T' s'>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "240": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "140"
          },
          "geom": {
            "loc": {
              "x": 1240,
              "y": 418
            }
          },
          "latentVisibility": true,
          "label": "Animate Clock Point",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "Animate Clock Point"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 0,
              "repeat": false,
              "motionType": "backward"
            }
          ]
        },
        "241": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "240"
          },
          "geom": {
            "loc": {
              "x": 1240,
              "y": 437
            }
          },
          "latentVisibility": true,
          "label": "Start Clock",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Start Clock"
          ],
          "stopAfter": 2.8
        },
        "242": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "140"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "243": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "242",
            "circle": "58"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "black",
            "radius": 2
          }
        },
        "244": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "2",
            "p1": "243"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "selectable": false,
            "color": "rgb(32,32,64)",
            "width": 1
          }
        },
        "245": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "243"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "246": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "243",
            "p1": "245"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "247": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "244",
            "circle": "246"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "248": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "center": "243"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "249": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "248",
            "center": "243"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "250": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "247",
            "center": "243"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "251": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "250",
            "1": "248",
            "2": "243",
            "3": "249"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "black",
            "opacity": 1,
            "layerOrder": 1
          }
        },
        "252": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "2",
            "p1": "140"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "253": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "252",
            "circle": "93"
          },
          "constraint": "Intersection2",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "254": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "253",
            "text": "239"
          },
          "constraint": "Pegged",
          "style": {
            "font-size": 12,
            "color": "black"
          }
        },
        "255": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "224",
            "1": "228",
            "2": "222",
            "3": "230",
            "4": "2",
            "5": "50",
            "6": "140",
            "7": "143",
            "8": "207",
            "9": "208",
            "10": "210",
            "11": "211",
            "12": "212",
            "13": "213",
            "14": "214",
            "15": "215",
            "16": "216",
            "17": "217",
            "18": "218",
            "19": "145",
            "20": "146",
            "21": "147",
            "22": "148",
            "23": "149",
            "24": "150",
            "25": "151",
            "26": "152",
            "27": "153",
            "28": "154",
            "29": "155",
            "30": "156",
            "31": "157",
            "32": "158",
            "33": "159",
            "34": "161",
            "35": "162",
            "36": "163",
            "37": "164",
            "38": "165",
            "39": "166",
            "40": "167",
            "41": "168",
            "42": "169",
            "43": "170",
            "44": "171",
            "45": "172",
            "46": "173",
            "47": "174",
            "48": "175",
            "49": "176",
            "50": "177",
            "51": "178",
            "52": "179",
            "53": "180",
            "54": "181",
            "55": "182",
            "56": "183",
            "57": "184",
            "58": "185",
            "59": "186",
            "60": "187",
            "61": "188",
            "62": "189",
            "63": "190",
            "64": "191",
            "65": "192",
            "66": "193",
            "67": "194",
            "68": "195",
            "69": "196",
            "70": "197",
            "71": "198",
            "72": "199",
            "73": "200",
            "74": "202",
            "75": "203",
            "76": "204",
            "77": "205",
            "78": "206",
            "79": "244",
            "80": "251",
            "81": "19",
            "82": "20",
            "83": "21",
            "84": "22"
          },
          "geom": {
            "loc": {
              "x": 1473,
              "y": 386
            }
          },
          "latentVisibility": true,
          "label": "Hide Clock",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Clock",
            "Show Clock"
          ]
        },
        "256": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "16",
            "1": "140"
          },
          "geom": {
            "loc": {
              "x": 1235,
              "y": 476
            }
          },
          "latentVisibility": true,
          "label": "Move Clock Point Rest of Way",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Move Clock Point Rest of Way"
          ],
          "rate": 1,
          "towardInitialDestination": true
        },
        "257": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "241",
            "1": "256"
          },
          "geom": {
            "loc": {
              "x": 1242,
              "y": 520
            }
          },
          "latentVisibility": true,
          "label": "Move Clock One Rotation",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "font-family": 0,
              "font-size": 10
            }
          },
          "constraint": "ActionButtonPresentSequentially",
          "messages": [
            "Move Clock One Rotation"
          ],
          "waitTime": 0
        },
        "258": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "126"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1806,
              "y": 265
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "d",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "259": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "233",
            "1": "133",
            "2": "258"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1338,
              "y": 883
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/(@1*@2)",
          "latentVisibility": true,
          "label": "m[8]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "260": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1801,
              "y": 146
            }
          },
          "textMFS": "<VL<T'vase calculations'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "261": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1957,
              "y": 523
            }
          },
          "textMFS": "<VL<T'height of vase 2'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "262": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1340,
              "y": 842
            }
          },
          "textMFS": "<VL<T'height of vase 1'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "263": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "130"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1803,
              "y": 214
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2",
          "latentVisibility": true,
          "label": "m[14]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "264": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "263",
            "1": "128"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 174
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2",
          "latentVisibility": true,
          "label": "(b-a)/2[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "265": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "128",
            "1": "264"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 240
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1+@1",
          "latentVisibility": true,
          "label": "b[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "266": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "137",
            "1": "132",
            "2": "258",
            "3": "233",
            "4": "265"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1953,
              "y": 549
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*@3*(@4-@0)+@0^2*@1^2*@2)))/((@4-@0)*sqrt(@2))",
          "latentVisibility": true,
          "label": "h[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "267": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "264"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1973,
              "y": 196
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "268": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "263",
            "1": "127"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2105,
              "y": 196
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2",
          "latentVisibility": true,
          "label": "(b-a)/2[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "269": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "127",
            "1": "268"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2105,
              "y": 218
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1+@1",
          "latentVisibility": true,
          "label": "b[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "270": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "127"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2105,
              "y": 240
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "a[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "271": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "138",
            "1": "132",
            "2": "258",
            "3": "233",
            "4": "269"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1956,
              "y": 848
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*@3*(@4-@0)+@0^2*@1^2*@2)))/((@4-@0)*sqrt(@2))",
          "latentVisibility": true,
          "label": "m[20]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "272": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1802,
              "y": 1
            }
          },
          "textMFS": "<VL<T'vase parameters'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "273": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1956,
              "y": 828
            }
          },
          "textMFS": "<VL<T'height of vase 3'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "274": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1639,
              "y": 505
            }
          },
          "textMFS": "<VL<T'needed to plot the'><T'height point to fill vase'><F1FxxFFFFFFFFx20x8x>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "275": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "17",
            "1": "140"
          },
          "geom": {
            "loc": {
              "x": 1245,
              "y": 576
            }
          },
          "latentVisibility": true,
          "label": "Reset Clock",
          "style": {
            "hidden": true,
            "color": "blue",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonMove",
          "messages": [
            "Reset Clock"
          ],
          "rate": 0
        },
        "276": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "275"
          },
          "geom": {
            "loc": {
              "x": 284,
              "y": 9
            }
          },
          "label": "Reset",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Reset"
          ],
          "stopAfter": "firstActionStops"
        },
        "277": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "257"
          },
          "geom": {
            "loc": {
              "x": 284,
              "y": -15
            }
          },
          "label": "Start",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Start"
          ],
          "stopAfter": "firstActionStops"
        },
        "278": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "116"
          },
          "coordX": 0,
          "coordY": 4,
          "constraint": "PlotFixedXFixedY",
          "label": "A[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "279": {
          "kind": "Measure",
          "genus": "DistanceMeasure",
          "parents": {
            "p0": "278",
            "obj0": "98"
          },
          "constraint": "MeasurementDistance",
          "geom": {
            "loc": {
              "x": 1990,
              "y": 61
            }
          },
          "latentVisibility": true,
          "label": "vertical scale for height of 4",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "280": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "279"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1990,
              "y": 37
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/4",
          "latentVisibility": true,
          "label": "vert scale",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "281": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "135",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1961,
              "y": 299
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "a[vase2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "282": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "265",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1961,
              "y": 320
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "b[vase[2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "283": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "270",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2088,
              "y": 291
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "a[vase3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "284": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "269",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2088,
              "y": 313
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "b[vase3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "285": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "132",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1660,
              "y": 21
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "h[vases]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "286": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "133",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1815,
              "y": 325
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "b[vase1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "287": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "134",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1815,
              "y": 346
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "offest[vase1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "288": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "112"
          },
          "value": -101.34747084798559,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "S[2]",
          "style": {
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "289": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "112"
          },
          "value": -69.91565086332207,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "I[2]",
          "style": {
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "290": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "289",
            "distance": "281"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "I'[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "291": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "290",
            "distance": "285"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "292": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "289",
            "distance": "285"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "293": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "292",
            "p1": "291"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "294": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "293"
          },
          "constraint": "Midpoint",
          "label": "H[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "295": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "282"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1961,
              "y": 336
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "296": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "294",
            "distance": "295"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "H'[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "297": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "294",
            "distance": "295"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "H'[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "298": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "289",
            "p1": "290"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "299": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "290",
            "p1": "296"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "300": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "296",
            "p1": "297"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "301": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "297",
            "p1": "289"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "302": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "112"
          },
          "value": -30.82736190803538,
          "constraint": "PointOnPath",
          "latentVisibility": true,
          "label": "R[2]",
          "style": {
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "303": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "302",
            "distance": "283"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "304": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "303",
            "distance": "285"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "305": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "302",
            "distance": "285"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "306": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "284"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2088,
              "y": 335
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "307": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "305",
            "p1": "304"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "308": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "307"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "309": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "308",
            "distance": "306"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "310": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "308",
            "distance": "306"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "311": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "310",
            "p1": "309"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "312": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "309",
            "p1": "303"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "313": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "303",
            "p1": "302"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "314": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "302",
            "p1": "310"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "315": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "297",
            "p1": "289"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "316": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "296",
            "p1": "290"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "317": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "303",
            "p1": "309"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "318": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "302",
            "p1": "310"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "319": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "112"
          },
          "value": 69.10970676115122,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "320": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "101"
          },
          "value": 9.661592653163918,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "321": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "75",
            "p0": "72",
            "p1": "98"
          },
          "constraint": "TranslateVector",
          "label": "0",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -5,
              "labelOffsetY": 4,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "322": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "321",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "label": "10",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -8,
              "labelOffsetY": 5,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "323": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "322",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "label": "20",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": 4,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "324": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "323",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "label": "30",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 5,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "325": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "324",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "label": "40",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -10,
              "labelOffsetY": 5,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "326": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "325",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "label": "50",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 5,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "327": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "326",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "label": "60",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -9,
              "labelOffsetY": 3,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "328": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1434,
              "y": 53
            }
          },
          "latentVisibility": true,
          "label": "B[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "329": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "328",
            "distance": "71"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "330": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "328",
            "distance": "71"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "331": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "330",
            "p1": "329"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "label": "n",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "332": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "331",
            "p0": "328",
            "p1": "98"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "333": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "116"
          },
          "coordX": 0,
          "coordY": 1,
          "constraint": "PlotFixedXFixedY",
          "label": "C[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "334": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "332",
            "p0": "98",
            "p1": "333"
          },
          "constraint": "TranslateVector",
          "label": "1",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -12,
              "labelOffsetY": -12,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "335": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "334",
            "p0": "98",
            "p1": "333"
          },
          "constraint": "TranslateVector",
          "label": "2",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -14,
              "labelOffsetY": -12,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "336": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "335",
            "p0": "98",
            "p1": "333"
          },
          "constraint": "TranslateVector",
          "label": "3",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -14,
              "labelOffsetY": -11,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "337": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "336",
            "p0": "98",
            "p1": "333"
          },
          "constraint": "TranslateVector",
          "label": "4",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -14,
              "labelOffsetY": -10,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "338": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1469,
              "y": 108
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.1 cm",
          "latentVisibility": true,
          "label": "slider tick",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "339": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1511,
              "y": 86
            }
          },
          "label": "D[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "340": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "339",
            "distance": "338"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "341": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "339",
            "distance": "338"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "342": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "341",
            "p1": "340"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "343": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "116"
          },
          "coordX": 0,
          "coordY": 0.5,
          "constraint": "PlotFixedXFixedY",
          "label": "E[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "344": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordSys": "116"
          },
          "coordX": 5,
          "coordY": 0,
          "constraint": "PlotFixedXFixedY",
          "label": "G[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "345": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1509,
              "y": 43
            }
          },
          "label": "F[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "346": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "345",
            "distance": "338"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "347": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "345",
            "distance": "338"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "348": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "347",
            "p1": "346"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "349": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "348",
            "p0": "345",
            "p1": "344"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "350": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "349",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "351": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "350",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "352": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "351",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "353": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "352",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "354": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "353",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "355": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "354",
            "p0": "98",
            "p1": "117"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "color": "black"
          }
        },
        "356": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "98",
            "p1": "319"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(32,32,64)"
          }
        },
        "357": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "319"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "358": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "319",
            "p1": "357"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "359": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "356",
            "circle": "358"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "360": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "359",
            "center": "319"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "361": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "360",
            "center": "319"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "362": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "359",
            "center": "319"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "363": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "362",
            "1": "360",
            "2": "319",
            "3": "361"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "black",
            "opacity": 1,
            "layerOrder": 2
          }
        },
        "364": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "98",
            "p1": "320"
          },
          "constraint": "Segment",
          "style": {
            "color": "rgb(32,32,64)"
          }
        },
        "365": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "320"
          },
          "angle": 0,
          "distance": 14.4,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "366": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "320",
            "p1": "365"
          },
          "constraint": "CircleFromTwoPoints",
          "style": {
            "hidden": true,
            "color": "rgb(32,64,32)",
            "width": 1
          }
        },
        "367": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "obj": "364",
            "circle": "366"
          },
          "constraint": "Intersection1",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "368": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "367",
            "center": "320"
          },
          "angle": -0.5235987755983,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "369": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "368",
            "center": "320"
          },
          "angle": 1.0471975511966,
          "constraint": "Rotate",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "370": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "367",
            "center": "320"
          },
          "scaleFactor": 0.7,
          "constraint": "DilateFixFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "371": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "370",
            "1": "368",
            "2": "320",
            "3": "369"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "color": "black",
            "opacity": 1,
            "layerOrder": 3
          }
        },
        "372": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1028,
              "y": 368
            }
          },
          "textMFS": "<T'time (s)'>",
          "style": {
            "font-size": 16,
            "color": "black"
          }
        },
        "373": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 667,
              "y": 95
            }
          },
          "textMFS": "<T'height (cm)'>",
          "style": {
            "font-size": 16,
            "color": "black"
          }
        },
        "374": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "48"
          },
          "geom": {
            "loc": {
              "x": 284,
              "y": 33
            }
          },
          "label": "Erase Traces",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Erase Traces"
          ],
          "stopAfter": "firstActionStops",
          "eraseAnyTraces": true
        },
        "375": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "139"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1718,
              "y": 696
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "m[26]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "376": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 173
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0",
          "latentVisibility": true,
          "label": "zero",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "377": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2360,
              "y": 293
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "V[rate]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "378": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "356",
            "line1": "327"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "379": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "378",
            "line": "364"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "380": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2357,
              "y": 264
            }
          },
          "textMFS": "<VL<T'functions to draw the tangents to the curves'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "381": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2687,
              "y": 92
            }
          },
          "textMFS": "<VL<T'alternate tangent calculation'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "382": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 158
            }
          },
          "textMFS": "<VL<T'=({1},{2})'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "383": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 178
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1 cm",
          "latentVisibility": true,
          "label": "point label rad",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "384": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 2362,
              "y": 68
            }
          },
          "textMFS": "<VL<T'measurements etc to label coordinates of the points'>>",
          "latentVisibility": true,
          "label": "t[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "385": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 565,
              "y": 18
            }
          },
          "textMFS": "<H<T'cm'><+<0><T'3'>><T'/s'>>",
          "style": {
            "color": "black"
          }
        },
        "386": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "290",
            "distance": "279"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "387": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "289",
            "distance": "279"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "388": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "386",
            "distance": "279"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "389": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "387",
            "distance": "279"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "390": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "296",
            "p1": "388"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "391": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "388",
            "p1": "389"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "392": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "389",
            "p1": "297"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "393": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "139"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1621,
              "y": 720
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "394": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "393",
            "1": "233"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1621,
              "y": 740
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "395": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "394"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1621,
              "y": 740
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(@0)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "396": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "395"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1621,
              "y": 740
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(1+@0)",
          "label": "m[21]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "397": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "396"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1621,
              "y": 740
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "latentVisibility": true,
          "label": "V[w] <= 840",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "398": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "397"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1627,
              "y": 802
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[24]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "399": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "269",
            "1": "132",
            "2": "258",
            "3": "233",
            "4": "139",
            "5": "270"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1956,
              "y": 908
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*(@3-@4)*(@5-@0)+@0^2*@1^2*@2)))/((@5-@0)*sqrt(@2))+@1",
          "latentVisibility": true,
          "label": "m[25]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "400": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "238",
            "1": "397"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1619,
              "y": 826
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "m[22]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "401": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "259",
            "1": "237",
            "2": "400",
            "3": "269",
            "4": "132",
            "5": "258",
            "6": "233",
            "7": "139",
            "8": "270",
            "9": "398"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1251,
              "y": 953
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*(((-@3*@4*sqrt(@5)+sqrt(abs(2*@4*(@6-@7)*(@8-@3)+@3^2*@4^2*@5))))/((@8-@3)*sqrt(@5))+@4)+@9*2*@4",
          "latentVisibility": true,
          "label": "height vase",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "402": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "401",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1812,
              "y": 368
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "height[vase1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "403": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "288",
            "distance": "402"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "404": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "232",
            "coordY": "401",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "latentVisibility": true,
          "label": "N[2]",
          "style": {
            "hidden": true,
            "traced": true,
            "color": "rgb(171,30,191)"
          }
        },
        "405": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "404",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 2428,
              "y": 120
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "406": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "404",
            "coordSys": "116"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 2367,
              "y": 123
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "407": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "406",
            "1": "405"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 118
            }
          },
          "textMFS": "<VL<H<0><H<T'('><?1xC0001<H<T'0.0'>>><H<T','><?1xC0002<H<T'0.0'>>><T')'>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "408": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "404",
            "radius": "383"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "409": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "408"
          },
          "value": 0.9975772662776738,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "410": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "409",
            "text": "407"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 10,
            "color": "rgb(171,30,191)"
          }
        },
        "411": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "410"
          },
          "geom": {
            "loc": {
              "x": 167,
              "y": 445
            }
          },
          "label": "Hide Label",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Label",
            "Show Label"
          ],
          "fade": true
        },
        "412": {
          "kind": "Expression",
          "genus": "Function",
          "parents": {
            "0": "137",
            "1": "132",
            "2": "258",
            "3": "377",
            "4": "265",
            "5": "237",
            "6": "400",
            "7": "139",
            "8": "398"
          },
          "constraint": "Function",
          "geom": {
            "loc": {
              "x": 2322,
              "y": 319
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "t",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*@3*x*(@4-@0)+@0^2*@1^2*@2)))/((@4-@0)*sqrt(@2))*@5+@6*((-@4*@1*sqrt(@2)+sqrt(abs(2*@1*(@3*x-@7)*(@0-@4)+@4^2*@1^2*@2)))/((@0-@4)*sqrt(@2))+@1)+@8*2*@1",
          "latentVisibility": true,
          "label": "t",
          "style": {
            "hidden": true,
            "font-family": 0,
            "color": "rgb(255,128,0)"
          }
        },
        "413": {
          "kind": "Expression",
          "genus": "ExactDerivative",
          "parents": {
            "0": "412",
            "1": "132",
            "2": "377",
            "3": "265",
            "4": "237",
            "5": "137",
            "6": "258",
            "7": "400",
            "8": "139"
          },
          "constraint": "Derivative_C",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "t'",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "(@1*@2*@3*@4*abs(2*@1*@2*@3*x+-2*@5*@1*@2*x+@5^2*@1^2*@6)^(-1/2)*sgn(2*@1*@2*@3*x+-2*@5*@1*@2*x+@5^2*@1^2*@6)+-1*@5*@1*@2*@4*abs(2*@1*@2*@3*x+-2*@5*@1*@2*x+@5^2*@1^2*@6)^(-1/2)*sgn(2*@1*@2*@3*x+-2*@5*@1*@2*x+@5^2*@1^2*@6))/(@6^(1/2)*@3+-1*@5*@6^(1/2))+(@5*@1*@2*@7*abs(2*@5*@1*@2*x+-2*@1*@2*@3*x+2*@1*@3*@8+-2*@5*@1*@8+@1^2*@6*@3^2)^(-1/2)*sgn(2*@5*@1*@2*x+-2*@1*@2*@3*x+2*@1*@3*@8+-2*@5*@1*@8+@1^2*@6*@3^2)+-1*@1*@2*@3*@7*abs(2*@5*@1*@2*x+-2*@1*@2*@3*x+2*@1*@3*@8+-2*@5*@1*@8+@1^2*@6*@3^2)^(-1/2)*sgn(2*@5*@1*@2*x+-2*@1*@2*@3*x+2*@1*@3*@8+-2*@5*@1*@8+@1^2*@6*@3^2))/(@5*@6^(1/2)+-1*@6^(1/2)*@3)",
          "label": "t'",
          "style": {
            "hidden": true,
            "font-family": 0
          }
        },
        "414": {
          "kind": "Expression",
          "genus": "Function",
          "parents": {
            "0": "270",
            "1": "132",
            "2": "258",
            "3": "377",
            "4": "269",
            "5": "237",
            "6": "400",
            "7": "375",
            "8": "138",
            "9": "398"
          },
          "constraint": "Function",
          "geom": {
            "loc": {
              "x": 2322,
              "y": 379
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "s",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*@3*x*(@4-@0)+@0^2*@1^2*@2)))/((@4-@0)*sqrt(@2))*@5+@6*((-@4*@1*sqrt(@2)+sqrt(abs(2*@1*(@3*x-@7)*(@8-@4)+@4^2*@1^2*@2)))/((@0-@4)*sqrt(@2))+@1)+@9*2*@1",
          "latentVisibility": true,
          "label": "s",
          "style": {
            "hidden": true,
            "font-family": 0,
            "color": "rgb(53,127,188)"
          }
        },
        "415": {
          "kind": "Expression",
          "genus": "ExactDerivative",
          "parents": {
            "0": "414",
            "1": "132",
            "2": "377",
            "3": "269",
            "4": "237",
            "5": "270",
            "6": "258",
            "7": "400",
            "8": "138",
            "9": "375"
          },
          "constraint": "Derivative_C",
          "geom": {
            "loc": {
              "x": 4032,
              "y": 673
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "s'",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "(@1*@2*@3*@4*abs(2*@1*@2*@3*x+-2*@5*@1*@2*x+@5^2*@1^2*@6)^(-1/2)*sgn(2*@1*@2*@3*x+-2*@5*@1*@2*x+@5^2*@1^2*@6)+-1*@5*@1*@2*@4*abs(2*@1*@2*@3*x+-2*@5*@1*@2*x+@5^2*@1^2*@6)^(-1/2)*sgn(2*@1*@2*@3*x+-2*@5*@1*@2*x+@5^2*@1^2*@6))/(@6^(1/2)*@3+-1*@5*@6^(1/2))+(@1*@2*@7*@8*abs(2*@1*@2*@8*x+-2*@1*@2*@3*x+2*@1*@3*@9+-2*@1*@9*@8+@1^2*@6*@3^2)^(-1/2)*sgn(2*@1*@2*@8*x+-2*@1*@2*@3*x+2*@1*@3*@9+-2*@1*@9*@8+@1^2*@6*@3^2)+-1*@1*@2*@3*@7*abs(2*@1*@2*@8*x+-2*@1*@2*@3*x+2*@1*@3*@9+-2*@1*@9*@8+@1^2*@6*@3^2)^(-1/2)*sgn(2*@1*@2*@8*x+-2*@1*@2*@3*x+2*@1*@3*@9+-2*@1*@9*@8+@1^2*@6*@3^2))/(@5*@6^(1/2)+-1*@6^(1/2)*@3)",
          "label": "s'",
          "style": {
            "hidden": true,
            "font-family": 0
          }
        },
        "416": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "271",
            "1": "237",
            "2": "400",
            "3": "399",
            "4": "132",
            "5": "398"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1961,
              "y": 968
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*(@3)+2*@4*@5",
          "latentVisibility": true,
          "label": "h[3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "417": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "232",
            "coordY": "416",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "latentVisibility": true,
          "label": "Z[1]",
          "style": {
            "hidden": true,
            "traced": true,
            "color": "rgb(47,115,188)"
          }
        },
        "418": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "417",
            "radius": "383"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "419": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "418"
          },
          "value": 0.00018645319127899029,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "420": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "417",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 2428,
              "y": 97
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "421": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "417",
            "coordSys": "116"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 2367,
              "y": 100
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "422": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "421",
            "1": "420"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 98
            }
          },
          "textMFS": "<VL<H<0><H<T'('><?1xC0001<H<T'0.0'>>><H<T','><?1xC0002<H<T'0.0'>>><T')'>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "423": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "419",
            "text": "422"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 10,
            "color": "rgb(53,127,188)"
          }
        },
        "424": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "423"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 443
            }
          },
          "label": "Hide Label",
          "style": {
            "color": "rgb(47,115,188)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Label",
            "Show Label"
          ],
          "fade": true
        },
        "425": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "417",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 782,
              "y": 653
            }
          },
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "426": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "417",
            "coordSys": "116"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 782,
              "y": 653
            }
          },
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "427": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "425",
            "1": "415",
            "2": "426"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 782,
              "y": 653
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1(@2)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "428": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "426"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 782,
              "y": 653
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "429": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "428",
            "coordY": "427",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "430": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "417",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 215
            }
          },
          "latentVisibility": true,
          "label": "m[29]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "431": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "41",
            "1": "430"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 239
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/(75/2*@1+25)",
          "latentVisibility": true,
          "label": "m[30]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "432": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "417",
            "coordSys": "116"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 191
            }
          },
          "latentVisibility": true,
          "label": "m[31]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "433": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "430",
            "1": "431",
            "2": "432"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2689,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1*@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "434": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "376",
            "coordY": "433",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "435": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "434",
            "p1": "417"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "red",
            "width": 1
          }
        },
        "436": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "417",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 1646,
              "y": 594
            }
          },
          "latentVisibility": true,
          "label": "m[19]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "437": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "436",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 2097,
              "y": 385
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "height[vase3]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "438": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "302",
            "distance": "437"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "439": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "438",
            "line": "311"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "440": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "439",
            "line1": "317"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "441": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "312",
            "line1": "439"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "442": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "314",
            "line1": "439"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "443": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "436"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1646,
              "y": 617
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "444": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "265",
            "1": "132",
            "2": "258",
            "3": "233",
            "4": "375",
            "5": "137"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1953,
              "y": 609
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(-@0*@1*sqrt(@2)+sqrt(abs(2*@1*(@3-@4)*(@5-@0)+@0^2*@1^2*@2)))/((@5-@0)*sqrt(@2))+@1",
          "latentVisibility": true,
          "label": "m[23]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "445": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "266",
            "1": "237",
            "2": "400",
            "3": "444",
            "4": "132",
            "5": "398"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1947,
              "y": 665
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0*@1+@2*@3)+2*@4*@5",
          "latentVisibility": true,
          "label": "m[17]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "446": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "232",
            "coordY": "445",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "latentVisibility": true,
          "label": "Y[1]",
          "style": {
            "hidden": true,
            "traced": true,
            "color": "rgb(255,128,0)"
          }
        },
        "447": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "446",
            "radius": "383"
          },
          "constraint": "CircleByRadius",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "448": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "447"
          },
          "value": 0.011304860971715949,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "449": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "446",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 2428,
              "y": 143
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "450": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "446",
            "coordSys": "116"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 2367,
              "y": 146
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 1,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "451": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "450",
            "1": "449"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 2485,
              "y": 138
            }
          },
          "textMFS": "<VL<H<0><H<T'('><?1xC0001<H<T'0.0'>>><H<T','><?1xC0002<H<T'0.0'>>><T')'>>>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 10,
            "color": "black"
          }
        },
        "452": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "448",
            "text": "451"
          },
          "constraint": "Pegged",
          "latentVisibility": true,
          "style": {
            "font-size": 10,
            "color": "rgb(255,128,0)"
          }
        },
        "453": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "452"
          },
          "geom": {
            "loc": {
              "x": 339,
              "y": 443
            }
          },
          "label": "Hide Label",
          "style": {
            "color": "rgb(255,128,0)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Label",
            "Show Label"
          ],
          "fade": true
        },
        "454": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "446",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "455": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "446",
            "coordSys": "116"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "label": "m[34]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "456": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "454",
            "1": "413",
            "2": "455"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1(@2)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "457": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "455"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "458": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "457",
            "coordY": "456",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "459": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "446",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 1646,
              "y": 548
            }
          },
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "460": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "459"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1646,
              "y": 571
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*1 cm",
          "latentVisibility": true,
          "label": "m[18]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "461": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "460",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1959,
              "y": 381
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1/1 cm",
          "latentVisibility": true,
          "label": "height[vase2]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "462": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "289",
            "distance": "461"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "463": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "462",
            "line": "300"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "464": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "315",
            "line1": "463"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "465": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "463",
            "line1": "316"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "466": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "462",
            "line": "293"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "467": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1953,
              "y": 729
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "-10",
          "latentVisibility": true,
          "label": "xcoord",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "468": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "467",
            "coordY": "444",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "label": "O[2]",
          "style": {
            "hidden": true,
            "color": "blue",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "469": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "468",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 1953,
              "y": 747
            }
          },
          "latentVisibility": true,
          "label": "m[27]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "470": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "469",
            "1": "400",
            "2": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1953,
              "y": 771
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-4)*1 cm*@1*@2/1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "471": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "297",
            "distance": "470"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "472": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "471",
            "line": "391"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "473": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "398",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1957,
              "y": 1073
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*2*4*@1/2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "474": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "297",
            "distance": "473"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "475": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "474",
            "line": "472"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "476": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "141",
            "1": "231",
            "2": "232",
            "3": "233",
            "4": "234",
            "5": "235",
            "6": "236",
            "7": "237",
            "8": "238",
            "9": "266",
            "10": "394",
            "11": "395",
            "12": "396",
            "13": "397",
            "14": "398",
            "15": "400",
            "16": "444",
            "17": "445",
            "18": "446",
            "drivenObject": "446",
            "domainObject": "50",
            "driverObject": "140"
          },
          "constraint": "GeomLocus",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "line-style": "solid",
            "width": 3,
            "endpointRadius": 2.5,
            "arrowheadRadius": 8
          },
          "numSamples": 250,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "477": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "364",
            "line1": "336"
          },
          "constraint": "Intersection",
          "label": "P[2]",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "478": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "364",
            "line1": "337"
          },
          "constraint": "Intersection",
          "label": "Q[2]",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "479": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "337",
            "p0": "477",
            "p1": "478"
          },
          "constraint": "TranslateVector",
          "label": "5",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -15,
              "labelOffsetY": -11,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "480": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "479",
            "p0": "477",
            "p1": "478"
          },
          "constraint": "TranslateVector",
          "label": "6",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -15,
              "labelOffsetY": -11,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "481": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "480",
            "p0": "477",
            "p1": "478"
          },
          "constraint": "TranslateVector",
          "label": "7",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -15,
              "labelOffsetY": -10,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "482": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "481",
            "p0": "477",
            "p1": "478"
          },
          "constraint": "TranslateVector",
          "label": "8",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -14,
              "labelOffsetY": -11,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "483": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "source": "482",
            "p0": "477",
            "p1": "478"
          },
          "constraint": "TranslateVector",
          "label": "9",
          "style": {
            "color": "black",
            "label": {
              "showLabel": true,
              "labelOffsetX": -14,
              "labelOffsetY": -10,
              "labelParam": 0,
              "font-size": 16
            }
          }
        },
        "484": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "304",
            "p0": "303",
            "p1": "304"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "485": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "305",
            "p0": "303",
            "p1": "304"
          },
          "constraint": "TranslateVector",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "486": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "310",
            "p1": "485"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "487": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "485",
            "p1": "484"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "488": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "484",
            "p1": "309"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "489": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "438",
            "line": "313"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "490": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "314",
            "line1": "489"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "491": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "312",
            "line1": "489"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "492": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "490",
            "1": "491",
            "2": "303",
            "3": "302"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "rgb(47,115,188)",
            "opacity": 0.7499961853027344,
            "layerOrder": 4
          }
        },
        "493": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "310",
            "p1": "485"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "494": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "309",
            "p1": "484"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "495": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "494",
            "line1": "489"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "496": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "493",
            "line1": "489"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "blue",
            "radius": 2
          }
        },
        "497": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "302",
            "1": "303",
            "2": "309",
            "3": "495",
            "4": "496",
            "5": "310"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "rgb(53,127,188)",
            "opacity": 0.7499961853027344,
            "layerOrder": 5
          }
        },
        "498": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "302",
            "1": "312",
            "2": "313",
            "3": "314",
            "4": "486",
            "5": "487",
            "6": "488",
            "7": "497"
          },
          "geom": {
            "loc": {
              "x": 506,
              "y": 513
            }
          },
          "latentVisibility": true,
          "label": "Hide Objects",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "499": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "141",
            "1": "231",
            "2": "232",
            "3": "233",
            "4": "234",
            "5": "235",
            "6": "236",
            "7": "237",
            "8": "238",
            "9": "271",
            "10": "394",
            "11": "395",
            "12": "396",
            "13": "397",
            "14": "398",
            "15": "399",
            "16": "400",
            "17": "416",
            "18": "417",
            "drivenObject": "417",
            "domainObject": "50",
            "driverObject": "140"
          },
          "constraint": "GeomLocus",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(47,115,188)",
            "line-style": "solid",
            "width": 3,
            "endpointRadius": 2.5,
            "arrowheadRadius": 8
          },
          "numSamples": 250,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "500": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "499"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 467
            }
          },
          "label": "Show Graph",
          "style": {
            "color": "rgb(47,115,188)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Graph",
            "Show Graph"
          ],
          "fade": true
        },
        "501": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "476"
          },
          "geom": {
            "loc": {
              "x": 339,
              "y": 467
            }
          },
          "label": "Show Graph",
          "style": {
            "color": "rgb(255,128,0)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Graph",
            "Show Graph"
          ],
          "fade": true
        },
        "502": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "417"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 419
            }
          },
          "label": "Show Point",
          "style": {
            "color": "rgb(47,115,188)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point",
            "Show Point"
          ],
          "fade": true
        },
        "503": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "446"
          },
          "geom": {
            "loc": {
              "x": 339,
              "y": 419
            }
          },
          "label": "Show Point",
          "style": {
            "color": "rgb(255,128,0)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point",
            "Show Point"
          ],
          "fade": true
        },
        "504": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "301",
            "line1": "463"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "505": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "299",
            "line1": "463"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "506": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "505",
            "1": "290",
            "2": "289",
            "3": "504"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "rgb(253,128,8)",
            "opacity": 0.7499961853027344,
            "layerOrder": 6
          }
        },
        "507": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "297",
            "p1": "389"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "508": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "296",
            "p1": "388"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "509": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "508",
            "line1": "463"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "510": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "507",
            "line1": "463"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "511": {
          "kind": "Polygon",
          "genus": "Hexagon",
          "parents": {
            "0": "510",
            "1": "297",
            "2": "289",
            "3": "290",
            "4": "296",
            "5": "509"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "color": "rgb(255,128,0)",
            "opacity": 0.7499961853027344,
            "layerOrder": 7
          }
        },
        "512": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "288",
            "measureX": "287",
            "measureY": "285"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "label": "S'[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "513": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "512",
            "p1": "288"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "514": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "288",
            "distance": "286"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "label": "S'[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "515": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "288",
            "p1": "514"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "516": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "514",
            "measureX": "287",
            "measureY": "285"
          },
          "constraint": "TranslateMeasureXMeasureY",
          "shouldAutogenerateLabel": true,
          "label": "S''[2]",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "showLabel": true,
              "labelOffsetX": 8,
              "labelOffsetY": 5,
              "font-family": 0,
              "font-size": 9
            },
            "radius": 2
          }
        },
        "517": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "516",
            "p1": "512"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "518": {
          "kind": "Straight",
          "genus": "Parallel",
          "parents": {
            "p0": "403",
            "line": "517"
          },
          "constraint": "Parallel",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "519": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "513",
            "line1": "518"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "520": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "514",
            "p1": "516"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "521": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "520",
            "line1": "518"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "aqua",
            "radius": 2
          }
        },
        "522": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "519",
            "1": "521",
            "2": "514",
            "3": "288"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "opacity": 0.7499961853027344,
            "layerOrder": 8
          }
        },
        "523": {
          "kind": "Point",
          "genus": "Midpoint",
          "parents": {
            "path": "517"
          },
          "constraint": "Midpoint",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "524": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "127",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1596,
              "y": 54
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(4-@0)/2*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "525": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "523",
            "distance": "524"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "526": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "523",
            "distance": "524"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "527": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "523",
            "distance": "285"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "528": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "127",
            "1": "280"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1580,
              "y": 98
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0/2*@1/1 cm",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "529": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "527",
            "distance": "528"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "530": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "527",
            "distance": "528"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "531": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "516",
            "p1": "526"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "532": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "526",
            "p1": "529"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "533": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "529",
            "p1": "530"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "534": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "530",
            "p1": "525"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "535": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "525",
            "p1": "512"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "color": "black"
          }
        },
        "536": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "525",
            "p1": "530"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "537": {
          "kind": "Straight",
          "genus": "Ray",
          "parents": {
            "p0": "526",
            "p1": "529"
          },
          "constraint": "Ray",
          "style": {
            "hidden": true,
            "color": "black",
            "width": 1
          }
        },
        "538": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "518",
            "line1": "536"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "539": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "518",
            "line1": "537"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "radius": 2
          }
        },
        "540": {
          "kind": "Polygon",
          "genus": "Polygon",
          "parents": {
            "0": "514",
            "1": "516",
            "2": "526",
            "3": "539",
            "4": "403",
            "5": "538",
            "6": "525",
            "7": "512",
            "8": "288"
          },
          "constraint": "PolygonFromPoints",
          "latentVisibility": true,
          "style": {
            "opacity": 0.7499961853027344,
            "layerOrder": 9
          }
        },
        "541": {
          "kind": "Sampler",
          "genus": "PointLocus",
          "parents": {
            "0": "141",
            "1": "231",
            "2": "232",
            "3": "233",
            "4": "234",
            "5": "235",
            "6": "236",
            "7": "237",
            "8": "238",
            "9": "259",
            "10": "394",
            "11": "395",
            "12": "396",
            "13": "397",
            "14": "398",
            "15": "400",
            "16": "401",
            "17": "404",
            "drivenObject": "404",
            "domainObject": "50",
            "driverObject": "140"
          },
          "constraint": "GeomLocus",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 3,
            "endpointRadius": 2.5,
            "arrowheadRadius": 8
          },
          "numSamples": 250,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": 0,
            "high": 1
          }
        },
        "542": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "404"
          },
          "geom": {
            "loc": {
              "x": 167,
              "y": 421
            }
          },
          "label": "Show Point",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Point",
            "Show Point"
          ],
          "fade": true
        },
        "543": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "492"
          },
          "geom": {
            "loc": {
              "x": 505,
              "y": 536
            }
          },
          "latentVisibility": true,
          "label": "Hide Quadrilateral",
          "style": {
            "hidden": true,
            "color": "aqua",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Quadrilateral",
            "Show Quadrilateral"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "544": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "498",
            "1": "543"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 395
            }
          },
          "label": "Vase Toggle",
          "style": {
            "color": "rgb(47,115,188)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Vase Toggle"
          ]
        },
        "545": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "289",
            "1": "298",
            "2": "299",
            "3": "301",
            "4": "390",
            "5": "391",
            "6": "392",
            "7": "511"
          },
          "geom": {
            "loc": {
              "x": 333,
              "y": 514
            }
          },
          "latentVisibility": true,
          "label": "Hide Objects",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "546": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "506"
          },
          "geom": {
            "loc": {
              "x": 333,
              "y": 535
            }
          },
          "latentVisibility": true,
          "label": "Hide Quadrilateral",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Quadrilateral",
            "Show Quadrilateral"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "547": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "545",
            "1": "546"
          },
          "geom": {
            "loc": {
              "x": 339,
              "y": 395
            }
          },
          "label": "Vase Toggle",
          "style": {
            "color": "rgb(255,128,0)"
          },
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Vase Toggle"
          ]
        },
        "548": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "541"
          },
          "geom": {
            "loc": {
              "x": 167,
              "y": 469
            }
          },
          "label": "Show Graph",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Graph",
            "Show Graph"
          ],
          "fade": true
        },
        "549": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "288",
            "1": "513",
            "2": "515",
            "3": "520",
            "4": "522",
            "5": "531",
            "6": "532",
            "7": "533",
            "8": "534",
            "9": "535"
          },
          "geom": {
            "loc": {
              "x": 162,
              "y": 514
            }
          },
          "latentVisibility": true,
          "label": "Hide Objects",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "550": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "540"
          },
          "geom": {
            "loc": {
              "x": 162,
              "y": 535
            }
          },
          "latentVisibility": true,
          "label": "Hide Polygon",
          "style": {
            "hidden": true,
            "color": "fuchsia",
            "label": {
              "font-family": 0
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Polygon",
            "Show Polygon"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "551": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "549",
            "1": "550"
          },
          "geom": {
            "loc": {
              "x": 167,
              "y": 397
            }
          },
          "label": "Vase Toggle",
          "constraint": "ActionButtonPresentSimultaneously",
          "messages": [
            "Vase Toggle"
          ]
        },
        "552": {
          "kind": "Expression",
          "genus": "Function",
          "parents": {
            "0": "237",
            "1": "377",
            "2": "133",
            "3": "258",
            "4": "400",
            "5": "269",
            "6": "132",
            "7": "139",
            "8": "270",
            "9": "398"
          },
          "constraint": "Function",
          "geom": {
            "loc": {
              "x": 2320,
              "y": 475
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "g[1]",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "@0*@1*x/(@2*@3)+@4*((-@5*@6*sqrt(@3)+sqrt(abs(2*@6*(@1*x-@7)*(@8-@5)+@5^2*@6^2*@3)))/((@8-@5)*sqrt(@3))+@6)+@9*2*@6",
          "latentVisibility": true,
          "label": "g[1]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "color": "rgb(171,30,191)"
          }
        },
        "553": {
          "kind": "Expression",
          "genus": "ExactDerivative",
          "parents": {
            "0": "552",
            "1": "237",
            "2": "377",
            "3": "133",
            "4": "258",
            "5": "400",
            "6": "132",
            "7": "270",
            "8": "269",
            "9": "139"
          },
          "constraint": "Derivative_C",
          "geom": {
            "loc": {
              "x": 623,
              "y": -28
            }
          },
          "expressionType": "YofX_FunctionExprType",
          "functionExpr": {
            "notation": "function",
            "name": "g[1]'",
            "dependentVar": "y",
            "independentVar": "x"
          },
          "expression": "(@1*@2)/(@3*@4)+(@2*@5*@6*@7*abs(2*@2*@6*@7*x+-2*@2*@8*@6*x+2*@8*@6*@9+-2*@6*@9*@7+@4*@8^2*@6^2)^(-1/2)*sgn(2*@2*@6*@7*x+-2*@2*@8*@6*x+2*@8*@6*@9+-2*@6*@9*@7+@4*@8^2*@6^2)+-1*@2*@5*@8*@6*abs(2*@2*@6*@7*x+-2*@2*@8*@6*x+2*@8*@6*@9+-2*@6*@9*@7+@4*@8^2*@6^2)^(-1/2)*sgn(2*@2*@6*@7*x+-2*@2*@8*@6*x+2*@8*@6*@9+-2*@6*@9*@7+@4*@8^2*@6^2))/(@4^(1/2)*@7+-1*@4^(1/2)*@8)",
          "label": "g[1]'",
          "style": {
            "hidden": true,
            "font-family": 0
          }
        },
        "554": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "404",
            "coordSys": "116"
          },
          "constraint": "MeasurementAbscissa",
          "geom": {
            "loc": {
              "x": 623,
              "y": -28
            }
          },
          "label": "m[33]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "555": {
          "kind": "Measure",
          "genus": "ScalarMeasure",
          "parents": {
            "point": "404",
            "coordSys": "116"
          },
          "constraint": "MeasurementOrdinate",
          "geom": {
            "loc": {
              "x": 623,
              "y": -28
            }
          },
          "label": "m[32]",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "556": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "554"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 623,
              "y": -28
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+1",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "557": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "555",
            "1": "553",
            "2": "554"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 623,
              "y": -28
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1(@2)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "558": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "556",
            "coordY": "557",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true,
            "color": "rgb(156,32,32)",
            "radius": 2
          }
        },
        "559": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "6",
            "2": "7",
            "3": "8",
            "4": "9",
            "5": "10",
            "6": "11",
            "7": "12",
            "8": "13",
            "9": "19",
            "10": "20",
            "11": "21",
            "12": "22",
            "13": "23",
            "14": "26",
            "15": "27",
            "16": "44",
            "17": "48",
            "18": "49",
            "19": "52",
            "20": "53",
            "21": "55",
            "22": "57",
            "23": "61",
            "24": "70",
            "25": "71",
            "26": "72",
            "27": "75",
            "28": "87",
            "29": "90",
            "30": "91",
            "31": "92",
            "32": "126",
            "33": "127",
            "34": "128",
            "35": "129",
            "36": "130",
            "37": "131",
            "38": "132",
            "39": "133",
            "40": "134",
            "41": "135",
            "42": "137",
            "43": "138",
            "44": "139",
            "45": "231",
            "46": "232",
            "47": "233",
            "48": "237",
            "49": "238",
            "50": "239",
            "51": "240",
            "52": "241",
            "53": "255",
            "54": "256",
            "55": "257",
            "56": "258",
            "57": "260",
            "58": "261",
            "59": "263",
            "60": "264",
            "61": "265",
            "62": "266",
            "63": "267",
            "64": "268",
            "65": "269",
            "66": "270",
            "67": "272",
            "68": "274",
            "69": "275",
            "70": "279",
            "71": "280",
            "72": "281",
            "73": "282",
            "74": "283",
            "75": "284",
            "76": "285",
            "77": "286",
            "78": "287",
            "79": "295",
            "80": "306",
            "81": "328",
            "82": "331",
            "83": "338",
            "84": "342",
            "85": "348",
            "86": "375",
            "87": "393",
            "88": "397",
            "89": "398",
            "90": "402",
            "91": "436",
            "92": "437",
            "93": "443",
            "94": "444",
            "95": "445",
            "96": "459",
            "97": "460",
            "98": "461",
            "99": "467",
            "100": "469",
            "101": "470",
            "102": "524",
            "103": "528",
            "104": "376",
            "105": "377",
            "106": "380",
            "107": "381",
            "108": "382",
            "109": "383",
            "110": "384",
            "111": "405",
            "112": "406",
            "113": "407",
            "114": "412",
            "115": "414",
            "116": "420",
            "117": "421",
            "118": "422",
            "119": "430",
            "120": "431",
            "121": "432",
            "122": "433",
            "123": "449",
            "124": "450",
            "125": "451",
            "126": "552",
            "127": "136",
            "128": "259",
            "129": "262",
            "130": "271",
            "131": "273",
            "132": "399",
            "133": "400",
            "134": "401",
            "135": "416",
            "136": "473",
            "137": "498",
            "138": "543",
            "139": "545",
            "140": "546",
            "141": "549",
            "142": "550"
          },
          "geom": {
            "loc": {
              "x": -92,
              "y": -34
            }
          },
          "label": "Show Objects",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true,
          "fade": true
        },
        "560": {
          "kind": "Sampler",
          "genus": "FunctionPlot",
          "parents": {
            "function": "414",
            "coordSys": "116"
          },
          "constraint": "FunctionPlot",
          "style": {
            "hidden": true,
            "line-style": "solid",
            "width": 1,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 500,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": -12.614855900459759,
            "high": 395.51706814034935
          }
        },
        "561": {
          "kind": "Sampler",
          "genus": "FunctionPlot",
          "parents": {
            "function": "412",
            "coordSys": "116"
          },
          "constraint": "FunctionPlot",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "line-style": "solid",
            "width": 1,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 500,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": -21.273067199925976,
            "high": 381.61453237790204
          }
        },
        "562": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 701,
              "y": 463
            }
          },
          "label": "Bottom Can",
          "style": {
            "hidden": true,
            "color": "yellow",
            "radius": 2
          }
        },
        "563": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1002,
              "y": 298
            }
          },
          "label": "Second Eighth",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -73,
              "labelOffsetY": -6,
              "font-family": 1,
              "font-size": 10
            },
            "radius": 2
          }
        },
        "564": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1034,
              "y": 349
            }
          },
          "label": "First Quarter",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -64,
              "labelOffsetY": -9,
              "font-family": 1,
              "font-size": 10
            },
            "radius": 2
          }
        },
        "565": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1003,
              "y": 473
            }
          },
          "label": "First Half",
          "style": {
            "hidden": true,
            "color": "yellow",
            "label": {
              "showLabel": true,
              "labelOffsetX": -48,
              "labelOffsetY": -4,
              "font-family": 1,
              "font-size": 10
            },
            "radius": 2
          }
        },
        "566": {
          "kind": "Button",
          "genus": "Action",
          "geom": {
            "loc": {
              "x": 965,
              "y": -8
            }
          },
          "label": "Previous Page",
          "style": {
            "color": "rgb(160,160,160)"
          },
          "constraint": "ActionButtonLinkPage",
          "messages": [
            "Previous Page"
          ],
          "pageId": "1"
        },
        "567": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 771,
              "y": -15
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.001 cm",
          "label": "xd",
          "style": {
            "hidden": true,
            "font-family": 0,
            "font-size": 14,
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "568": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "417",
            "distance": "567"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(47,115,188)"
          }
        },
        "569": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "404",
            "distance": "567"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(171,30,191)"
          }
        },
        "570": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "446",
            "distance": "567"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)"
          }
        },
        "571": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "417",
            "p1": "568"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "572": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "404",
            "p1": "569"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "573": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "446",
            "p1": "570"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "574": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "568",
            "line": "571"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "575": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "0": "574",
            "1": "499"
          },
          "constraint": "InterApproxPathStitchedPath_C",
          "label": "T[2]",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "label": {
              "showLabel": true,
              "labelOffsetX": 2,
              "labelOffsetY": 2,
              "font-family": 0
            }
          }
        },
        "576": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "569",
            "line": "572"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "577": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "0": "576",
            "1": "541"
          },
          "constraint": "InterApproxPathStitchedPath_C",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)"
          }
        },
        "578": {
          "kind": "Straight",
          "genus": "Perpendicular",
          "parents": {
            "p0": "570",
            "line": "573"
          },
          "constraint": "Perpendicular",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "width": 1
          }
        },
        "579": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "0": "578",
            "1": "476"
          },
          "constraint": "InterApproxPathStitchedPath_C",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)"
          }
        },
        "580": {
          "kind": "Sampler",
          "genus": "FunctionPlot",
          "parents": {
            "function": "552",
            "coordSys": "116"
          },
          "constraint": "FunctionPlot",
          "style": {
            "hidden": true,
            "color": "rgb(171,30,191)",
            "line-style": "solid",
            "width": 1,
            "endpointRadius": 2,
            "arrowheadRadius": 6.5
          },
          "numSamples": 750,
          "isDiscrete": false,
          "showEndpoints": true,
          "driverDomain": {
            "low": -100,
            "high": 523.2592083344306
          }
        },
        "581": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "232"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1153,
              "y": 669
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+0.00001",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "582": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "414",
            "1": "581"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1153,
              "y": 691
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0(@1)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "583": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "581",
            "coordY": "582",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "584": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "417",
            "p1": "583"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "rgb(53,127,188)",
            "line-style": "dashed",
            "width": 1
          }
        },
        "585": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "412",
            "1": "581"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1153,
              "y": 713
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0(@1)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "586": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "581",
            "coordY": "585",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "587": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "586",
            "p1": "446"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "line-style": "dashed",
            "width": 1
          }
        },
        "588": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "552",
            "1": "581"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1153,
              "y": 735
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0(@1)",
          "style": {
            "hidden": true,
            "font-family": 0,
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "589": {
          "kind": "Point",
          "genus": "PlottedPoint",
          "parents": {
            "coordX": "581",
            "coordY": "588",
            "coordSys": "116"
          },
          "constraint": "PlotMarkedXMarkedY",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "590": {
          "kind": "Straight",
          "genus": "Line",
          "parents": {
            "p0": "404",
            "p1": "589"
          },
          "constraint": "Line",
          "style": {
            "hidden": true,
            "color": "rgb(171,30,191)",
            "line-style": "dashed",
            "width": 1
          }
        },
        "591": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "587",
            "line1": "379"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "592": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "584",
            "line1": "379"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "593": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "379",
            "line1": "590"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "594": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "101",
            "line1": "587"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "595": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "590",
            "line1": "101"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "596": {
          "kind": "Point",
          "genus": "Intersection",
          "parents": {
            "line0": "584",
            "line1": "101"
          },
          "constraint": "Intersection",
          "style": {
            "hidden": true,
            "color": "rgb(160,160,160)",
            "radius": 2
          }
        },
        "597": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "594",
            "p1": "591"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(253,128,8)"
          }
        },
        "598": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "596",
            "p1": "592"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "color": "rgb(53,127,188)"
          }
        },
        "599": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "593",
            "p1": "595"
          },
          "constraint": "Segment",
          "latentVisibility": true,
          "style": {
            "hidden": true
          }
        },
        "600": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "598"
          },
          "geom": {
            "loc": {
              "x": 498,
              "y": 490
            }
          },
          "label": "Show Tangent",
          "style": {
            "color": "rgb(47,115,188)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Tangent",
            "Show Tangent"
          ]
        },
        "601": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "597"
          },
          "geom": {
            "loc": {
              "x": 339,
              "y": 489
            }
          },
          "label": "Show Tangent",
          "style": {
            "color": "rgb(253,128,8)"
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Tangent",
            "Show Tangent"
          ]
        },
        "602": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "599"
          },
          "geom": {
            "loc": {
              "x": 167,
              "y": 491
            }
          },
          "label": "Show Tangent",
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Tangent",
            "Show Tangent"
          ]
        }
      }
    }
  ]
};