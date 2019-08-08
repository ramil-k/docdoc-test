import React from 'react';
import styles from './styles/App.module.scss';
import { sendData } from './service/data';
import { initialState, mainReducer } from './reducers/main';
import { PersonalInfo } from './components/PersonalInfo';
import { ShippingInfo } from './components/ShippingInfo';
import { Popup } from './components/Popup';

const App = () => {
  const [{
    selectedMenu,
    shippingInfo,
    generalInfo,
    popup,
  }, dispatch] = React.useReducer(mainReducer, initialState)

  const shippingFormRef = React.useRef(null);

  const menu = [{
    title: 'Основные данные',
    onClick:() => {
      dispatch({type: 'OpenGeneralInfo'});
      shippingFormRef.current.resetForm();
    }
  }, {
    title: 'Адрес доставки'
  }];

  const sendDataCallback = React.useCallback(
    (shippingInfo) => sendData({shippingInfo, generalInfo}, dispatch),
    [generalInfo])
  return <div>
    <div className={styles.menu}>
      {menu.map(({title, onClick}, index) =>
        <button
          key={index}
          onClick={onClick ? onClick: () => undefined}
          className={[
            styles.menuButton,
            selectedMenu === index ? styles.selected: undefined
          ].join(' ')}>{title}</button>)
      }
    </div>
    <PersonalInfo
      hidden={selectedMenu !== 0}
      initialValues={generalInfo}
      onSubmit={(values) => dispatch({type: 'SetGeneralInfo', payload: values})} />
    <ShippingInfo
      formRef={shippingFormRef}
      hidden={selectedMenu !== 1}
      initialValues={shippingInfo}
      onSubmit={sendDataCallback}/>
    {!popup ? <></>: <Popup type={popup.type}/>}
  </div>;
}

export default App;
