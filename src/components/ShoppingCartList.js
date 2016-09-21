import React from 'react';
import _ from 'lodash';
import ShoppingCartItem from './ShoppingCartItem';
import $ from 'jquery';


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

export default ShoppingCartList;