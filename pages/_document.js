import Document, { Html, Head, Main, NextScript } from 'next/document'
import sprite from 'svg-sprite-loader/runtime/sprite.build';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const spriteContent = sprite.stringify();

        return {
            spriteContent,
            ...initialProps,
        };
    }
    render() {
        return (
            <Html lang='id'>
                <Head />
                <body>
                    <div dangerouslySetInnerHTML={{ __html: this.props.spriteContent }} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument