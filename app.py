import webbrowser
import threading
import os
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Bật chế độ debug
app.config['DEBUG'] = True

# Địa chỉ server Flask
HOST = "127.0.0.1"
PORT = 3811

@app.route("/")
def index():
    return render_template("index.html")

# Component loader routes
@app.route("/component/header")
def component_header():
    return render_template("header.html")

@app.route("/component/footer")
def component_footer():
    return render_template("footer.html")

@app.route("/component/hero_section")
def component_hero():
    return render_template("hero_section.html")

@app.route("/component/best_sellers_section")
def component_best_sellers():
    return render_template("best_sellers_section.html")

@app.route("/component/call_to_action_section")
def component_call_to_action():
    return render_template("call_to_action_section.html")

@app.route("/component/cards_section")
def component_cards():
    return render_template("cards_section.html")

@app.route("/component/promo_cards_section")
def component_promo_cards():
    return render_template("promo_cards_section.html")

# Chỉ mở trình duyệt nếu đây là tiến trình chính (tránh auto-reload)
def open_browser():
    if os.environ.get("WERKZEUG_RUN_MAIN") == "true":  # Chỉ chạy khi Flask khởi động lần đầu
        webbrowser.open(f"http://{HOST}:{PORT}/", new=2)

if __name__ == "__main__":
    threading.Thread(target=open_browser).start()
    app.run(host=HOST, port=PORT)