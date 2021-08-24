
import { useCallback, useRef } from 'react'
import { Mentions, Tooltip } from 'antd'

import { ReactComponent as IconFace } from '@img/face.svg'
import { ReactComponent as IconPicture } from '@img/picture.svg'
import { ReactComponent as IconFile } from '@img/file.svg'
import { ReactComponent as IconVideo } from '@img/video.svg'
import { ReactComponent as IconText } from '@img/text.svg'
import { ReactComponent as IconSend } from '@img/send.svg'

const { Option } = Mentions;

/**
 * 使用 indexedDB 让历史聊天信息本地化,  不再去服务器读取历史记录
 * 但仅支持当前使用电脑，本地持久化读取历史信息
 */
export default () => {

    //发送信息
    const sendMessage = useCallback(() => {
        console.log('enter: handle something message send');

    }, []);

    const onKeyPress = useCallback((e) => {
        // not shift + enter
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }, []);



    return (
        <div className='im-main-footer'>
            <div className='it-top'>
                <span className='icon-tool'><IconFace /></span>
                <span className='icon-tool'><IconPicture /></span>
                <span className='icon-tool'><IconFile /></span>
                <span className='icon-tool'><IconVideo /></span>
                <span className='icon-tool'><IconText /></span>
            </div>

            <div className='im-input'>
                <Mentions
                    className='im-mentions'
                    autoSize={{ minRows: 3 }}
                    onKeyPress={onKeyPress}
                    // onPressEnter={onPressEnter}
                    autoFocus
                    placement="top">
                    <Option value="afc163">afc163</Option>
                    <Option value="zombieJ">zombieJ</Option>
                    <Option value="yesmeck">yesmeck</Option>
                </Mentions>

                <div className='im-send'>
                    <Tooltip title='按Enter发送信息，Ctrl+Enter换行' placement="left"><IconSend onClick={sendMessage} /></Tooltip>
                </div>
            </div>
        </div>
    )
}