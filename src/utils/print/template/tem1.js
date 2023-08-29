export default {
  panels: [
    {
      index: 0,
      name: 1,
      height: 297,
      width: 210,
      paperHeader: 49.5,
      paperFooter: 780,
      printElements: [
        {
          options: {
            left: 200,
            top: 25,
            height: 9.75,
            width: 120,
            title: '姓名',
            right: 319.9921875,
            bottom: 34.74609375,
            vCenter: 259.9921875,
            hCenter: 29.87109375,
            field: 'name',
            testData: 'nuomi',
            coordinateSync: false,
            widthHeightSync: false,
            qrCodeLevel: 0
          },
          printElementType: {
            title: '文本',
            type: 'text'
          }
        },
        {
          options: {
            left: 385,
            top: 20,
            height: 9.75,
            width: 120,
            title: '年龄',
            field: 'age',
            testData: '20',
            coordinateSync: false,
            widthHeightSync: false,
            qrCodeLevel: 0
          },
          printElementType: {
            title: '文本',
            type: 'text'
          }
        }
      ],
      paperNumberLeft: 565.5,
      paperNumberTop: 819,
      paperNumberContinue: true,
      watermarkOptions: {
        content: 'vue-plugin-hiprint',
        rotate: 25,
        timestamp: true,
        format: 'YYYY-MM-DD HH:mm'
      }
    }
  ]
}
