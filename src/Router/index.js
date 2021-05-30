import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeView from '../Views/HomeView';
import ProductDetail from '../Views/ProductDetailView';

export const AppRouter = () => {
    return(
        <Router>
            <div style={{marginTop: '80px'}}>
                <Switch>
                    <Route exact path="/" component={HomeView}></Route>
                    <Route exact path="/productDetail/:id" component={ProductDetail}></Route>
                    <Route component={HomeView}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
