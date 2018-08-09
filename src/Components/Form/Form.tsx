import React from "react";

interface IProps{
    onSubmit: any;
}

const Form: React.SFC<IProps> = ({onSubmit}) => <form onSubmit={(e) => {e.preventDefault(); onSubmit()} />

export default Form;