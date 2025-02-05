import { useState } from 'react';
import styles from './index.module.css';

const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function App() {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');

	const onClickNum = event => {
		const num = event.target.textContent;

		if (!operator) {
			setOperand1(prevNum => prevNum + num);
		} else {
			setOperand2(prevNum => prevNum + num);
		}
	};

	const onClickOperator = event => {
		setResult('');
		const oper = event.target.textContent;
		if (!operator) {
			setOperator(oper);
		}
	};

	const onClickClear = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
		setResult('');
	};

	const onClickResult = () => {
		let res = 0;
		if (operand1 && !operand2) {
			setOperator('');
			return;
		}
		if (operand1 && operand2) {
			switch (operator) {
				case '+':
					res = Number(operand1) + Number(operand2);
					break;
				case '-':
					res = Number(operand1) - Number(operand2);
					break;
				default:
					return;
			}

			setResult(res.toString());
			setOperand1(res.toString());
			setOperator('');
			setOperand2('');
		}
	};

	const buttons = NUMS.map(num => (
		<button onClick={onClickNum} key={num}>
			{num}
		</button>
	));

	const isOperand1 = operand1 || '';
	const isOperand2 = operand2 || '';
	const isOperator = operator || '';
	const isResult = result || '';

	return (
		<>
			<div className={styles.calculator}>
				<p id={styles.display} className={isResult ? styles.result : ''}>
					{isResult ? result : isOperand1 + isOperator + isOperand2}
				</p>
				<div className={styles.buttons}>
					<button className={styles.operator} onClick={onClickOperator}>
						+
					</button>
					<button className={styles.operator} onClick={onClickOperator}>
						-
					</button>
					<button className={styles.operator} onClick={onClickClear}>
						C
					</button>
					<button className={styles.equals} onClick={onClickResult}>
						=
					</button>
					{buttons}
				</div>
			</div>
		</>
	);
}

export default App;
