import React from 'react'
import './Chat.css'
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '../../assets/whatsapp.png';
import TelegramIcon from '../../assets/telegram.png';
import Livechat from '../../assets/livechat.svg';


function Chat() {
  return (
    <>
      <div className='main'>
    <div className='con2'>
        <MessageIcon style={{ fontSize: 60 , color: 'rgba(255, 113, 144, 1)' }}  className='question' />
        <div className='con-in'>
        <h3>Chat</h3>
        <small>Chat with our travel guide</small>
        <div className='icons'>
    <div>
        <img src={WhatsAppIcon} style={{ width: 30 }} className='question' />
        <p>WhatsApp</p>
    </div>
    <div>
        <img src={TelegramIcon} style={{ width: 30 }} className='question' />
        <p>Telegram</p>
    </div>
    <div>
        <img src={Livechat} style={{ width: 30 }} className='question' />
        <p>Livechat</p>
    </div>
</div>
        </div>
    </div>

   
</div>
    </>
  )
}

export default Chat
