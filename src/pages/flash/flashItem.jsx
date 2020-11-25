import React from 'react'

class FlashItem extends React.Component {
    handleClick = () =>{
        this.props.flashFn.deleteFlashAc(this.props.id)
    }
    render() {
        return (
            <div>
                <div className="alert alert-success" role="alert">
                    {this.props.text}
                    <button
                        type="button"
                        className="close"
                        aria-label="Close"
                        onClick={this.handleClick}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

            </div>

        )
    }
}

export default FlashItem;