import React,{Component} from 'react'

class Card extends Component {
  state = {  }
  buyingButton(prodData){
    if(prodData.buyed===false){
      return <button className="btn btn-outline-success" onClick={() => this.props.onBuying(this.props.data)} style={{position:"relative",float:"right"}}>Buy</button>
    }else{
      return <button className="btn btn-outline-danger" onClick={() => this.props.onCancel(this.props.data)} style={{position:"relative",float:"right"}}>Cancel</button>
    }
  }
  render() { 
    const prodData = this.props.data
    return (  
      <>
      <div className="card m-2" style={{width: "18rem"}}>
        <img src={prodData.imgsrc} className="card-img" alt="Sorry"/>
        <div className="card-body">
            <h5 className="card-title">Name: {prodData.name}   </h5>
            <h5 className="card-title">Category: {prodData.category}   </h5>
            <p className="card-text">Price: {prodData.price}
            {this.buyingButton(prodData)}
            </p>
        </div>
        </div>
      </>
    );
  }
}
 
export default Card;
