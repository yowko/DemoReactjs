import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


class ShoppingCartItem extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
                      <div className="row">
                        <div className="col-xs-2">
                            <img alt="#" className="img-responsive" src={ this.props.data.Url }/>
                        </div>

                        <div className="col-xs-4">
                            <h4 className="product-name">
                                <strong>{ this.props.data.Name }</strong>
                            </h4>
                        </div>

                        <div className="col-xs-6">
                            <div className="col-xs-6 text-right">
                                <h6>
                                    <strong>
                                        { this.props.data.Price } <span className="text-muted">x</span>
                                    </strong>
                                </h6>
                            </div>

                            <div className="col-xs-4">
                                <input type="number" className="form-control input-sm" value={ this.props.data.Qty } /*onChange={this.handleChnage.bind(this)}*//>
                            </div>

                            <div className="col-xs-2">
                                <button type="button" className="btn btn-link btn-xs">
                                    <span className="glyphicon glyphicon-trash"> </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    )
     

    }
    //畫面互動
    // handleChnage(event)
    // {
    //     this.props.onChange(event.target.value);
    // }






}




class ShoppingCartList extends React.Component
{
      constructor(props){
          super(props);
          this.state={
              //productList: [],
              //total:this.MoneySum([])
              productList:this.props.initialProductList,
              total:this.MoneySum(this.props.initialProductList)
            };
            
      }
    // API 用
    //  componentDidMount() {
    //   this.serverRequest = $.get("http://localhost:3511/api/CartList", function (result) {
    //    this.setState({
    //          productList: result,
    //          total:this.MoneySum(result)
    //          });
    //      }.bind(this));
    //   }
    
    render(){
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                             {
                                 
                                 this.state.productList.map(function (child,index) {
                                return <ShoppingCartItem data={child} key={index} /*onChange={ this.handleChange.bind(this,index) }*/ />;
                                },this)
                            }
                           
                        </div>
                        <div className="panel-footer">
                            <div className="row text-center">
                                <div className="col-xs-9">
                                    <h4 className="text-right">Total <strong>${ this.state.total }</strong></h4>
                                </div>
                                <div className="col-xs-3">
                                    <button type="button" className="btn btn-success btn-block">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);

    }
    //處理 使用者互動
    // handleChange(index, newQty) {
    //      var newProductList = _.cloneDeep(this.state.productList);
    //      newProductList[index].Qty = newQty;    
    //      this.setState({
    //          productList: newProductList
    //          , total: this.MoneySum(newProductList)
    //      });
    //  }

     MoneySum(newProductList){
         var total=0;
         var list =newProductList;
         if(list.length>0)
         {
            list.forEach(function(item) {
                total += item.Qty*item.Price;
            }, this);
         }
        return total;
     }
   
}


var productList = [];
 for (var i = 1; i <= 5; i++) {
     var product = {
         Url: 'http://placehold.it/100x70',
         Name: 'Product 1',
         Price: 100,
         Qty: 1
     };

     productList.push(product);
 }




ReactDOM.render(
  <ShoppingCartList initialProductList={ productList }/>,
  document.getElementById('root')
);
