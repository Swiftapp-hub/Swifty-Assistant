import QtQuick 2.15
import QtQuick.Controls 2.15
import QtQuick.Layouts 1.15

Row {
    id: messageRow
    spacing: 6
    anchors.right: model.isSendUser ? parent.right : undefined
    anchors.rightMargin: 12

    Image {
        id: avatar
        anchors.bottom: parent.bottom
        sourceSize.height: 30
        sourceSize.width: 30
        source: !model.isSendUser ? "qrc:/Icon/assistantIcon.png" : ""
    }

    Rectangle {
        width: Math.min(
                   messageText.implicitWidth + 24,
                   listMessage.width - avatar.width - messageRow.spacing - (window.width / 6))
        height: messageText.implicitHeight + 24
        color: model.isSendUser ? "#554a8e" : "#bf99a5"
        radius: 20

        TextEdit {
            id: messageText
            readOnly: true
            selectByMouse: true
            textFormat: Text.StyledText
            text: model.text
            color: model.isSendUser ? "white" : "black"
            font.pointSize: model.text.length === 2 ? 18 : 9
            anchors.fill: parent
            anchors.margins: 12
            wrapMode: Label.Wrap
        }
    }
}
