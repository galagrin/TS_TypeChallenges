// Replace
// 📝 Условие задачи
// Реализуйте `Replace<S, From, To>`, который в строке S заменяет Первое вхождения From на To.

// Пример
//type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

type Replace<S extends string, From extends string, To extends string> = From extends `${""}`
    ? S
    : S extends `${infer Left}${From}${infer Tail}`
    ? `${Left}${To}${Tail}`
    : S;

// Replace all
// 📝 Условие задачи
// Реализуйте `ReplaceAll<S, From, To>`, который в строке S заменяет Все вхождения From на To.

//  Тесткейсы
type Test = ReplaceAll<"foobar", "bar", "foo">; //'foofoo'
type Test1 = ReplaceAll<"foobar", "bag", "foo">; //'foobar'
type Test2 = ReplaceAll<"foobarbar", "bar", "foo">; //'foofoofoo'
type Test3 = ReplaceAll<"t y p e s", " ", "">; //'types'
type Test4 = ReplaceAll<"foobarbar", "", "foo">; //'foobarbar'
type Test5 = ReplaceAll<"foobarfoobar", "ob", "b">; //'fobarfobar'
type Test6 = ReplaceAll<"foboorfoboar", "bo", "b">; //'foborfobar'
type Test7 = ReplaceAll<"", "", "">; //''

type ReplaceAll<S extends string, From extends string, To extends string> = From extends `${""}`
    ? S
    : S extends `${infer Head}${From}${infer Tail}`
    ? `${Head}${To}${ReplaceAll<Tail, From, To>}`
    : S;
