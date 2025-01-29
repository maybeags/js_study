let text = 'StudyEasy';

//let x = text.charAt(8);
//let x = text.concat(" Hello there!!  ");  StudyEasy  Hello there!!  로 나옴.

/*
JavaScript에서 .concat() 메서드는 배열(Array) 또는 **문자열(String)**에서 사용되어, 두 개 이상의 배열이나 문자열을 결합하여 새로운 배열 또는 문자열을 반환하는 메서드입니다. 원본 배열이나 문자열을 변경하지 않고, 새로운 결과값을 반환합니다.

1. 배열에서의 .concat()

배열의 .concat() 메서드는 하나 이상의 배열이나 값을 현재 배열에 병합하여 새로운 배열을 생성합니다.

구문

newArray = array.concat(value1, value2, ..., valueN);

특징
	•	원본 배열은 수정되지 않습니다.
	•	배열뿐 아니라 단일 값도 추가할 수 있습니다.

예제

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// 배열 결합
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// 배열에 단일 값 추가
const extended = arr1.concat(7);
console.log(extended); // [1, 2, 3, 7]

// 여러 값 추가
const multiExtended = arr1.concat(7, [8, 9]);
console.log(multiExtended); // [1, 2, 3, 7, 8, 9]

2. 문자열에서의 .concat()

문자열의 .concat() 메서드는 두 개 이상의 문자열을 결합하여 새로운 문자열을 생성합니다.

구문

newString = string.concat(string2, string3, ..., stringN);

특징
	•	원본 문자열은 수정되지 않습니다.
	•	결합된 문자열이 반환됩니다.

예제

const str1 = "Hello";
const str2 = "World";

// 문자열 결합
const combinedStr = str1.concat(" ", str2);
console.log(combinedStr); // "Hello World"

// 여러 문자열 결합
const extendedStr = str1.concat(", ", "how are you?");
console.log(extendedStr); // "Hello, how are you?"

3. .concat()의 사용 시 주의사항

3.1 Immutable

.concat() 메서드는 원본 배열이나 문자열을 수정하지 않으므로, 기존 데이터는 안전하게 유지됩니다.

3.2 다차원 배열 처리

.concat()는 중첩된 배열을 펼치지 않습니다. 배열 자체를 값으로 간주합니다.

const arr1 = [1, 2];
const arr2 = [3, [4, 5]];

const result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, [4, 5]]

3.3 대안 메서드
	•	배열 병합 시 ES6의 **스프레드 연산자(…)**를 사용할 수도 있습니다:

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

4. .concat() 메서드의 요약

특징	배열	문자열
반환 값	새로운 배열	새로운 문자열
원본 데이터 변경 여부	변경되지 않음	변경되지 않음
대안 메서드	스프레드 연산자 ...	템플릿 리터럴 ${str1}${str2}

.concat() 메서드는 간단하면서도 안전하게 데이터를 결합할 수 있는 방법을 제공합니다. 다양한 상황에서 활용할 수 있으므로 숙지해두면 좋습니다!
*/
//let x = text.endsWith('easy');
//let x = text.lastIndexOf('y');
//let x = text.replaceAll('y', 'z');
//let x = text.toLowerCase();
let x = text.


console.log(x)