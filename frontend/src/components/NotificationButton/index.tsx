import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-meta.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
  saleId:number;
}

const handleClick = (id:number) =>{
  axios(`http://dsmeta-tarcisio.herokuapp.com/sales/${id}/notification`)
  .then(response =>{
    toast.info('SMS enviado com sucesso!');
  })
}

function NotificationButton({saleId} : Props) {



  return (
    <>
      <div className="dsmeta-red-btn" onClick={()=>handleClick(saleId)}>
        <img src={icon}alt="Notificar" />
      </div>
    </>
  );
}

export default NotificationButton;
