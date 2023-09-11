import { message } from "antd";
import { AxiosError } from "axios";


const ErrorHandler = (e: unknown) => {
  if(e instanceof AxiosError && e.response) {
    const { message: message_info } = e.response.data;
    if (e.response.status === 400 && message_info) {
      message.error(message_info);
    }
  }
};

export default ErrorHandler