import React from "react";
import { ScrollView, Linking, View } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { BarChart, Grid, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";
import { StockLine } from "react-native-pathjs-charts";
const images = [
  {
    key: 1,
    name: "Nathan Anderson",
    image: require("../images/1.jpg"),
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  },
  {
    key: 2,
    name: "Jamison McAndie",
    image: require("../images/2.jpg"),
    url: "https://unsplash.com/photos/waZEHLRP98s"
  },
  {
    key: 3,
    name: "Alberto Restifo",
    image: require("../images/3.jpg"),
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  },
  {
    key: 4,
    name: "John Towner",
    image: require("../images/4.jpg"),
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  }
];

// export default () => (
//   <View style={{ flex: 1 }}>
//     <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
//       {images.map(({ name, image, url, key }) => (
//         <Card title={`Chart ${key}`} image={image} key={key}>
//           <Text style={{ marginBottom: 10 }}>Photo by {name}.</Text>
//           <Button
//             backgroundColor="#03A9F4"
//             title="VIEW NOW"
//             onPress={() => Linking.openURL(url)}
//           />
//         </Card>
//       ))}
//     </ScrollView>
//   </View>
// );

export default class Home extends React.Component {
  render() {
    let data = [
      [
        {
          x: 0,
          y: 47782
        },
        {
          x: 1,
          y: 48497
        },
        {
          x: 2,
          y: 77128
        },
        {
          x: 3,
          y: 73413
        },
        {
          x: 4,
          y: 58257
        },
        {
          x: 5,
          y: 40579
        },
        {
          x: 6,
          y: 72893
        },
        {
          x: 7,
          y: 60663
        },
        {
          x: 8,
          y: 15715
        },
        {
          x: 9,
          y: 40305
        },
        {
          x: 10,
          y: 68592
        },
        {
          x: 11,
          y: 95664
        },
        {
          x: 12,
          y: 17908
        },
        {
          x: 13,
          y: 22838
        },
        {
          x: 14,
          y: 32153
        },
        {
          x: 15,
          y: 56594
        },
        {
          x: 16,
          y: 76348
        },
        {
          x: 17,
          y: 46222
        },
        {
          x: 18,
          y: 59304
        }
      ],
      [
        {
          x: 0,
          y: 132189
        },
        {
          x: 1,
          y: 61705
        },
        {
          x: 2,
          y: 154976
        },
        {
          x: 3,
          y: 81304
        },
        {
          x: 4,
          y: 172572
        },
        {
          x: 5,
          y: 140656
        },
        {
          x: 6,
          y: 148606
        },
        {
          x: 7,
          y: 53010
        },
        {
          x: 8,
          y: 110783
        },
        {
          x: 9,
          y: 196446
        },
        {
          x: 10,
          y: 117057
        },
        {
          x: 11,
          y: 186765
        },
        {
          x: 12,
          y: 174908
        },
        {
          x: 13,
          y: 75247
        },
        {
          x: 14,
          y: 192894
        },
        {
          x: 15,
          y: 150356
        },
        {
          x: 16,
          y: 180360
        },
        {
          x: 17,
          y: 175697
        },
        {
          x: 18,
          y: 114967
        }
      ],
      [
        {
          x: 0,
          y: 125797
        },
        {
          x: 1,
          y: 256656
        },
        {
          x: 2,
          y: 222260
        },
        {
          x: 3,
          y: 265642
        },
        {
          x: 4,
          y: 263902
        },
        {
          x: 5,
          y: 113453
        },
        {
          x: 6,
          y: 289461
        },
        {
          x: 7,
          y: 293850
        },
        {
          x: 8,
          y: 206079
        },
        {
          x: 9,
          y: 240859
        },
        {
          x: 10,
          y: 152776
        },
        {
          x: 11,
          y: 297282
        },
        {
          x: 12,
          y: 175177
        },
        {
          x: 13,
          y: 169233
        },
        {
          x: 14,
          y: 237827
        },
        {
          x: 15,
          y: 242429
        },
        {
          x: 16,
          y: 218230
        },
        {
          x: 17,
          y: 161511
        },
        {
          x: 18,
          y: 153227
        }
      ]
    ];
    let options = {
      width: 250,
      height: 250,
      color: "#2980B9",
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: "delayed",
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: "bottom",
        tickValues: [],
        label: {
          fontFamily: "Arial",
          fontSize: 8,
          fontWeight: true,
          fill: "#34495E"
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: "left",
        tickValues: [],
        label: {
          fontFamily: "Arial",
          fontSize: 8,
          fontWeight: true,
          fill: "#34495E"
        }
      }
    };

    return (
      <View>
        <StockLine data={data} options={options} xKey="x" yKey="y" />
      </View>
    );
  }
}
