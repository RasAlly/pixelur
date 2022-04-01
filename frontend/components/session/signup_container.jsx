import { connect } from "react-redux";
import { clearErrors } from "../../actions/error_actions";
import { signup } from "../../actions/session_actions";
import Signup from "./signup";


const mapStateToProps = state => ({
  errors: state.errors,
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  signup: formUser => dispatch(signup(formUser)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);