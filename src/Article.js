import React, {Component} from 'react';
import CommentList from './CommentList';
import toggleOpen from './decorators/toggleOpen';

class Article extends Component {
  

  getBody() {
        if (!this.props.isOpen) return null
        const {article} = this.props
        return (
            <section>
               {article.text}
               <CommentList comments = {article.comments}/>
            </section>
        )
    }


    render() {
        const {isOpen, article, toggleOpen} = this.props;
        console.log('isOpen', isOpen)
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    
    
}

export default toggleOpen(Article);