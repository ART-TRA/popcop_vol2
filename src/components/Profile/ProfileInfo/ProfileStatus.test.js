import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => { //набор тестов
    test("status in props should be in the state", () => {
        const component = create(<ProfileStatus status='shepard' />);
        const instance = component.getInstance(); //провер-ся объект класса (в данном случае объект класса ProfileStatus)
        expect(instance.state.status).toBe("shepard");
    });
    test("after creation div should be displayed", () => { //должен быть показан div со статусом, а не input, в который его вводят
        const component = create(<ProfileStatus status='shepard' />);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation input should't be displayed", () => { //если попытаться найти input, то должна быть ошибка
        const component = create(<ProfileStatus status='shepard' />);
        const instance = component.root;
        expect(()=>{
            const input = instance.findByType("input"); //input не должно быть
        }).toThrow();
    });
    test("after creation div should be display correct status", () => {
        const component = create(<ProfileStatus status="shepard" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("shepard");
    });
    test("input should be displayed instead of span after doubleClick", () => {
        const component = create(<ProfileStatus status="shepard" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("shepard");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="shepard" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.diactiveStatus();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});