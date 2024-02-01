import Form from '../form/form.jsx';
import Good from '../good/good.jsx';
import {connect} from 'react-redux';

function App({detailsAndAnalogs}) {
  const hasDetails = Object.keys(detailsAndAnalogs).length > 0;

  return (
    <div className="container">
      <Form/>
      {hasDetails && <Good/>}
    </div>
  )
};

const mapStateToProps = (state) => ({
  detailsAndAnalogs: state.detailsAndAnalogs,
});

export default connect(mapStateToProps, null)(App);
