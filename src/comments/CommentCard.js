import React, { Component } from 'react'
import '../App.css'
import { CardBlock, Card, CardText, CardImg, CardTitle, CardSubtitle, Button } from 'reactstrap'

class CommentCard extends Component {
  render () {
    return (
      <Card className="comment-card">
        <CardImg top width="20%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBlock>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBlock>
      </Card>
    )
  }
}

export default CommentCard
