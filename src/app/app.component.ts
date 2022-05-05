import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onLetterChange() {
    this.includeLetters = !this.includeLetters;
  }
  
  onNumbersChange() {
    this.includeNumbers = !this.includeNumbers;
  }
  
  onSymbolsChange() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClicked() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    
    if (this.includeNumbers) {
      validChars += numbers;
    }
    
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = ''
    for (let i = 0; i < this.length; i++) {
      const passCharIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[passCharIndex];
    }

    this.password = generatedPassword;
  }
}
