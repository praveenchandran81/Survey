export interface IQuestion{
    QuestionNumber:number;
    QuestionName:string;
    Answer:string;
}

const QuestionsData:IQuestion[]=[
    {
        QuestionNumber:1,
        QuestionName:'Question 1 ?',
        Answer:'',
    },
    {
        QuestionNumber:2,
        QuestionName:'Question 2 ?',
        Answer:'',
    },
    {
        QuestionNumber:3,
        QuestionName:'Question 3 ?',
        Answer:'',
    },
    {
        QuestionNumber:4,
        QuestionName:'Question 4 ?',
        Answer:'',
    }
]

export default QuestionsData;