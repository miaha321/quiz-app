import React, { Component } from "react";
import Options from "./options";

class question extends Component {
    render() {
        const{ question, selectedOptions, onOptionChange, onSubmit } = this.props;
        
        return(
            <div className="">
                <h3>question {question.id}</h3>
                <h5 className='mt-2'>{question.question} </h5>
                <form onSubmit={onSubmit} className="">
                    <Options
                        Options={question.Options}
                        selectedOptions={selectedOptions}
                        onOptionChange={onOptionChange}
                    />
                    <button type="submit"  >
                        SUMBTI
                    </button>
                </form>
            </div>
        );
    }
}

export default question;