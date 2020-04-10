import CountDown from 'ant-design-pro/lib/CountDown';

const targetTime = new Date().getTime() + 3900000;

ReactDOM.render(<CountDown style={{ fontSize: 20 }} target={targetTime} />, mountNode);