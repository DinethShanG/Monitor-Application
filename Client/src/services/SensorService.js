import axios from 'axios'

class SensorService{
    getSensorReadings(SENSOR_REST_API_URL){
        return axios.get(SENSOR_REST_API_URL);
    }
}
export default new SensorService();