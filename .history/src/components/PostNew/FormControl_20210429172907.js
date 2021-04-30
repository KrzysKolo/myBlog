import { Input, TextArea } from './FormComponents/';


const FormikControl = (props) => {
    const { control, ...rest } = props;
    switch(control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <TextArea {...rest} />
        default: return null
    }
}

export default FormikControl;