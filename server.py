from flask import Flask, render_template, url_for
app = Flask(__name__)


@app.route('/')
def main_page():
    rows = 20
    cols = 32
    snake_place = [33]
    return render_template('index.html', rows=rows, cols=cols, snake_place=snake_place)


if __name__ == '__main__':
    app.run(debug=True)
