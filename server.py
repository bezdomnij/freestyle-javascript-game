from flask import Flask, render_template, url_for
app = Flask(__name__)


@app.route('/')
def main_page():
    rows = 15
    cols = 20
    snake_place = [33]
    snake_row = snake_place[0] // 32
    snake_col = snake_place[0] % 32

    return render_template('index.html', rows=rows, cols=cols, snake_row=snake_row, snake_col=snake_col)


if __name__ == '__main__':
    app.run(debug=True)
