import express, { RequestHandler} from 'express';

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);//メモリ上にのみ保存

    res.status(201).json({message: "リスト作成", createTodo: newTodo});
}