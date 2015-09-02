# BytecodeExplorer
## Current state
This is an AngularJS application that allows the user to upload a .class file (does not go to the server), and opens the file in a 
Hex editor on the left. As you mouse over the hex, the decompile pane on the right displays the translation of the bytecode.

For example, mousing over the constant pool displays the translation of each constant. Mousing over any method displays the disassembled
method instruction, such as would be seen in javap

This is intended to help users understand the organization of bytecode.

## Goals
Eventually I would like to finish translating this to Java, with the purpose of creating an agent to execute the desired code in the JVM and
monitor the stack and program registers. Some of that work has already been started and the code is in the src/main/java directory.

&copy; Victor Grazi 2015