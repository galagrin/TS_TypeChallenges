// Replace
// 📝 Условие задачи
// Реализуйте `Replace<S, From, To>`, который в строке S заменяет все вхождения From на To.

// Пример
//type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

type Replace<S extends string, From extends string, To extends string> = From extends `${""}`
    ? S
    : S extends `${infer Left}${From}${infer Tail}`
    ? `${Left}${To}${Tail}`
    : S;
