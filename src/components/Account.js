import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from 'redux/accountSlice';

export const Account = () => {
    const dispatch = useDispatch();
    const balance = useSelector(state => state.account.balance);
    return (
      <div>
        <p>
          <b>{balance}</b>
        </p>
        <button onClick={() => dispatch(deposit(15))}>Deposite</button>
        <button onClick={() => dispatch(withdraw(20))}>Withdraw</button>
      </div>
    );
};
    