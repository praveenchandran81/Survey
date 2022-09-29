import { IQuestion } from "../../data/questionsData";

 
export interface IQuestionComponent{
    PresentQuestion?:IQuestion;
    SetQuestion:(question:IQuestion)=>void;
}