# -*- coding: utf-8 -*-
"""One-page portfolio PDF (print-friendly summary)."""

from pathlib import Path

from fpdf import FPDF

OUT = Path(__file__).resolve().parent / "Gali_Hari_Santhosh_Portfolio.pdf"
PROFILE_IMG = Path(__file__).resolve().parent / "images" / "profile.png"

SECTIONS = [
    ("GALI HARI SANTHOSH", "Data Analyst | M.Tech VLSI | Python, SQL, Tableau, Power BI"),
    ("PROFILE", (
        "Enthusiastic Data Analyst with strengths in statistical modeling, ML, dashboards, "
        "and predictive analytics (Python, SQL, Tableau, Power BI). Certified via Besant "
        "Technologies and Reliance Foundation. M.Tech ECE (VLSI) at KL University. Upcoming "
        "thesis: Design of Railway Passenger System using Verilog. Completed RTL NN accelerator project."
    )),
    ("EDUCATION", (
        "KL University (2025-2027): M.Tech ECE, VLSI specialization, CGPA 8.55\n"
        "New Prince Shri Bhavani COE (2018-2022): B.E ECE, CGPA 7.9\n"
        "Viswasai Junior College (2016-2018): Intermediate MPC, 931 marks\n"
        "Sri Sainadh High School (2016): 10th Grade, CGPA 9.2"
    )),
    ("TRAINING", (
        "Data Science Training Program - Besant Technologies Institute "
        "(Jan 2024 - Sep 2024). Skills: Excel, Advanced Excel, Python, Oracle SQL, "
        "ML, Deep Learning, NLP, Tableau, Power BI"
    )),
    ("CERTIFICATIONS", (
        "AI/ML FPGA Hackathon (2025, NIT Jamshedpur / VLSI FOR ALL): Rank 16\n"
        "Data Science Essentials - Reliance Foundation (Nov 2024)\n"
        "Data Science Training Program - Besant Technologies (Jan 2024 - Sep 2024)\n"
        "Java Full Stack - JSpiders Hebbal (Jan 2023 - Jun 2023): Java, HTML, CSS, JS, SQL"
    )),
    ("M.TECH THESIS (UPCOMING)", (
        "Design of Railway Passenger System using Verilog (KL University, VLSI, 2025-2027): "
        "RTL modules, FSMs for ticketing/passenger flow, displays, simulation & verification"
    )),
    ("KEY PROJECTS", (
        "1) HW NN Accelerator (Completed, Lead) - RTL 4-8-8-2, UART, SystemVerilog UVM TB\n"
        "2) Banking App - Django, Tkinter, PostgreSQL\n"
        "3) Super Store Report (Tableau)\n"
        "4) Solar Power Prediction - GitHub"
    )),
    ("TECHNOLOGIES", (
        "Python | Java | HTML | CSS | JavaScript | Excel | Advanced Excel | Oracle SQL | "
        "Django | SQL | Power BI | Tableau | Probability | "
        "Statistics | Machine Learning | Deep Learning | NLP | Verilog | SystemVerilog | "
        "Digital Circuits | CMOS Logic | Static Timing Analysis | UVM"
    )),
    ("SOFT SKILLS", (
        "Communication | Problem-solving | Adaptability | Critical thinking | Active listening"
    )),
    ("LANGUAGES", "Telugu | Tamil | English | Kannada"),
    ("CONTACT", (
        "Email: harisanthosh2000@gmail.com\n"
        "LinkedIn: linkedin.com/in/gali-hari-santhosh-502657245\n"
        "GitHub: github.com/Hari-Santhosh"
    )),
]


class PDF(FPDF):
    def footer(self):
        self.set_y(-12)
        self.set_font("Helvetica", "I", 8)
        self.cell(0, 8, f"Page {self.page_no()}", align="C")


def build():
    pdf = PDF()
    pdf.set_margins(18, 18, 18)
    pdf.set_auto_page_break(auto=True, margin=18)
    pdf.add_page()

    w = pdf.epw

    for i, (title, body) in enumerate(SECTIONS):
        if i == 0:
            img_w = 32
            text_w = w - img_w - 6 if PROFILE_IMG.exists() else w
            y0 = pdf.get_y()
            if PROFILE_IMG.exists():
                pdf.image(str(PROFILE_IMG), x=pdf.l_margin + text_w + 6, y=y0, w=img_w)
            pdf.set_font("Helvetica", "B", 18)
            pdf.multi_cell(text_w, 8, title)
            pdf.set_font("Helvetica", "", 11)
            pdf.set_text_color(80, 80, 80)
            pdf.multi_cell(text_w, 6, body)
            pdf.set_text_color(0, 0, 0)
            if PROFILE_IMG.exists():
                pdf.set_y(max(pdf.get_y(), y0 + img_w * 1.15))
            pdf.ln(6)
            continue

        pdf.set_font("Helvetica", "B", 11)
        pdf.set_text_color(30, 100, 180)
        pdf.multi_cell(w, 6, title)
        pdf.set_text_color(0, 0, 0)
        pdf.set_font("Helvetica", "", 10)
        pdf.multi_cell(w, 5, body)
        pdf.ln(4)

    pdf.output(str(OUT))
    return OUT


if __name__ == "__main__":
    print(f"Wrote: {build()}")
