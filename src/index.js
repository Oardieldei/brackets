module.exports = function check(str, brCfg) {
	if (str.length % 2) return false

	let openArr = []
	let closeArr = []

	for (let i = 0; i < brCfg.length; i++) {
		openArr.push(brCfg[i][0])
		closeArr.push(brCfg[i][1])
	}

	let some = ' '

	const myFunc = (str) => {
		if (str.length > 1) {
			let nyam = str

			for (let j = 0; j < str.length - 1; j++) {
				if ((openArr.includes(str[j])) && (closeArr.includes(str[j + 1])) && (openArr.indexOf(str[j]) == closeArr.indexOf(str[j + 1]))) {
					str = str.slice(0, j) + (str[j + 2] ? str.slice(j + 2, str.length) : '')
					break;

				}
				if ((openArr.includes(str[j])) && (closeArr.includes(str[j + 1])) && !(openArr.indexOf(str[j]) == closeArr.indexOf(str[j + 1])) && !(str[j] != str[j + 1])) {
					str = ' '
					return;

				}
			}

			if (str == nyam) return false

		} else return;

		some = str
		myFunc(some)
	}
	myFunc(str)

	return some.length == 0 ? true : false
}
