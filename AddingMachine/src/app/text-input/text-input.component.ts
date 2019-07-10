import { Component, OnInit } from '@angular/core';
import KrisStack from 'krisstack';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  answer: number = 0;
  public run(string: String): number {
    let ops: KrisStack<String> = new KrisStack<String>();
    let vals: KrisStack<number> = new KrisStack<number>();
    let tokens = []; 
        tokens = string.split(" ");
        tokens.forEach((token) => {
            if (token==("(")) {
            }else if (token==("+")) {
                ops.push(token);
            }else if (token==("-")) {
                ops.push(token);
            }else if (token==("*")) {
                ops.push(token);
            }else if (token==("/")) {
                ops.push(token);
            }else if (token==("sqrt")) {
                ops.push(token);
            }else if (token==(")")) {
                let op: String = ops.pop();
                let v: number = vals.pop();
                if (op==("+")) {
                    v = (vals.pop() + v);
                }else if (op==("-")) {
                    v = (vals.pop() - v);
                }else if (op==("*")) {
                    v = (vals.pop() * v);
                }else if (op==("/")) {
                    v = (vals.pop() / v);
                }else if (op==("sqrt")) {
                    v = Math.sqrt(v);
                }
                vals.push(v);
            }else {
                vals.push(parseFloat(token));
            }   
        });
        this.answer = vals.pop();
        return this.answer;
    }
}
