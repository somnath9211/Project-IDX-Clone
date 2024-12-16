import Editor from '@monaco-editor/react';

export const EditorComponents = () => {

    return (
        <>
            <Editor
                height={'80vh'}
                width={'100%'}
                defaultLanguage="javascript"
                defaultValue="//Welcom to the playground"
                options={{
                    fontSize: 18,
                    fontFamily: 'monospace'
                }}
                theme="vs-dark"

            />
        </>
    )
}
