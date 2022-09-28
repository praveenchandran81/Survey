 
import * as React from 'react';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface IAnswerComponent{
    getAnswer:(ans:string)=>void;
}

interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
  }
  
  const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }));
  
  function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  

  
const AnswerComponent = (props:IAnswerComponent) => {
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setValue((event.target as HTMLInputElement).value);
        const ans=(event.target as HTMLInputElement).value;
         props.getAnswer(ans);
      };

  return (
    <RadioGroup name="use-radio-group" onChange={handleRadioChange} >
      <MyFormControlLabel value="1" label="Strongly Disagree" control={<Radio  color="error"/>} />
      <MyFormControlLabel value="2" label="Disagree" control={<Radio  color="secondary"/>} />
      <MyFormControlLabel value="3" label="Neutral" control={<Radio color="default"/>} />
      <MyFormControlLabel value="4" label="Agree" control={<Radio color="success"/>} />
      <MyFormControlLabel value="5" label="Strongly Agree" control={<Radio color="success"/>} />
      <MyFormControlLabel value="6" label="I don\'t know" control={<Radio color="secondary"/>} />
      <MyFormControlLabel value="7" label="Not Applicable" control={<Radio color="error"/>} />
    </RadioGroup>
  )
}

export default AnswerComponent


