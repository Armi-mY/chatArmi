let nicknameBot = document.getElementById('nicknameBot');
let tanggalChat = document.querySelector(`.tanggalChat`);
let inputChatB = document.querySelector(`.inputChat-button`);
let inputchat = document.querySelector(`.input-chat`);
let chatGroup = document.querySelector(`.chatGroup`);
let scrollB = document.querySelector(`.akhirPostingan`);

function TextBotJawab(jawaban, pesan) {
    this.jawaban = jawaban;
    this.pesan = pesan;

    this.nilaiJawab = () => {
        this.nilaiJawabAkhir = 100 / TextBotArmi.pertanyaanPG.length;
    };
    this.akhirJawab = () => {
        let akhirJawaban = `<div class="theChatB">
                    <div class="ChatB">
                        <div class="borderChatB">
                            <p class="textB">Waw! wawancara selesai. Tidak kerasa ya? Sungguh jawaban yang menarik. Hasil wawancara akan di proses, mohon menunggu..</p>
                            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`;

        let hasilJawaban = `<div class="theChatB">
        <div class="ChatB">
            <div class="borderChatB">
                <p class="textB">Seberapa dekat kamu dengan Armi <br> <br>
                    Persentase kamu: ${botArmi.nilai}%<br>
                    <br>
                    Pesan: "${TextBotJawabArmi.pesan}"
                </p>
                <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
            </div>
        </div>
    </div>`;
        let headingAkhir = `<div class="theChatB">
        <div class="ChatB">
            <div class="borderChatB">
                      <p class="text">Hasil Wawancara</p>
                      <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                </div>
            </div>
        </div>`;

        setTimeout(() => {
            chatGroup.insertAdjacentHTML(`beforeend`, akhirJawaban);
            botArmi.scrollBottom()

            setTimeout(() => {
                chatGroup.insertAdjacentHTML(`beforeend`, headingAkhir);
                botArmi.scrollBottom()

                setTimeout(() => {
                    chatGroup.insertAdjacentHTML(`beforeend`, hasilJawaban);
                    botArmi.scrollBottom()
                    console.log(TextBotJawabArmi.pesan)
                }, 2000)
            }, 2000)
        }, 1500)
    };

    this.pesannya = () => {
        let hasilPesan = `<div class="theChatB">
        <div class="ChatB">
            <div class="borderChatB">
                <p class="textB">Sebelum mengakhiri wawancara ini. Apakah ada pesan yang ingin di sampaikan? (opsional).</p>
                <div class="buttonJawaban">
                    <button id="buttonJawab" onclick="botArmi.akhirPesanWawancarak('Tidak ada pesan'); botArmi.buttonSTD2();">
                        <div class="jawaban">Skip</div>
                    </button>
            </div>
            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
        </div>
    </div>`;

        setTimeout(() => {
            botArmi.akhirWawancara = true;
            chatGroup.insertAdjacentHTML(`beforeend`, hasilPesan);
            botArmi.scrollBottom()
        }, 1500)
    }
};

//-------------------------------------------------------------------------------------------------------------------
function TextBot(pertanyaanPG, responJawab, headingSoalPG) {
    this.pertanyaanPG = pertanyaanPG;
    this.responJawab = responJawab;
    this.headingSoalPG = headingSoalPG;
};
//--------------------------------------------------------------------------------------------------------------------
function bot(nama, bulan, pengguna, judul, nilai) {
    this.nama = nama;
    this.penggunaChat = pengguna;
    this.judul = judul;
    this.nilai = nilai;

    this.akhirWawancara = false;
    this.kondisi1 = true;
    this.kondisi2 = false;
    this.pertanyaan = false;
    this.Jawab1 = false;
    this.Jawab2 = false;
    this.Jawab3 = false
    this.Jawab4 = false;

    this.buttonSTD = () => {
        setTimeout(() => {
            this.buttonSTD = document.querySelectorAll(`#buttonSTD`);
            this.buttonSTD[1].disabled = true;
            this.buttonSTD[0].disabled = true;
        }, 300)
    };

    this.buttonSTD2 = () => {
        setTimeout(() => {
            this.bonSTD2 = document.querySelectorAll(`#buttonJawab`);
            console.log(this.bonSTD2)
            for (let BJ = 0; BJ < this.bonSTD2.length; BJ++) {
                this.bonSTD2[BJ].disabled = true;
            }
        }, 300);
    };
    this.responJawab2 = (text) => {
        this.RESPON = `<div class="theChat">
                    <div class="Chat">
                        <div class="borderChat">
                            <p class="text">Jawaban saya "${text}".</p>
                            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`;

        chatGroup.insertAdjacentHTML(`beforeend`, this.RESPON);
    };

    this.cekJawab = (text) => {
        botArmi.responJawab2(text);
        if (this.Jawab1) {
            if (text == TextBotJawabArmi.jawaban[0]) {
                setTimeout(() => {
                    botArmi.Jawab1 = false;
                    botArmi.kondisi2 = false;
                    TextBotJawabArmi.nilaiJawab();
                    botArmi.nilai += TextBotJawabArmi.nilaiJawabAkhir;
                    botArmi.pertanyaan('pertanyaan2');
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            } else {
                setTimeout(() => {
                    botArmi.Jawab1 = false;
                    botArmi.kondisi2 = false;
                    botArmi.pertanyaan('pertanyaan2');
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            }

        } else if (this.Jawab2) {
            if (text == TextBotJawabArmi.jawaban[7]) {
                setTimeout(() => {
                    botArmi.Jawab2 = false;
                    TextBotJawabArmi.nilaiJawab();
                    botArmi.nilai += TextBotJawabArmi.nilaiJawabAkhir;
                    botArmi.pertanyaan('pertanyaan3');
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            } else {
                setTimeout(() => {
                    botArmi.Jawab2 = false;
                    botArmi.pertanyaan('pertanyaan3');
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            }
        } else if (this.Jawab3) {
            if (text == TextBotJawabArmi.jawaban[9]) {
                setTimeout(() => {
                    botArmi.Jawab3 = false;
                    TextBotJawabArmi.nilaiJawab();
                    botArmi.nilai += TextBotJawabArmi.nilaiJawabAkhir;
                    botArmi.pertanyaan('pertanyaan4');
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            } else {
                setTimeout(() => {
                    botArmi.Jawab3 = false;
                    botArmi.pertanyaan('pertanyaan4');
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            }
        } else if (this.Jawab4) {
            if (text == TextBotJawabArmi.jawaban[12]) {
                setTimeout(() => {
                    botArmi.Jawab4 = false;
                    TextBotJawabArmi.nilaiJawab();
                    botArmi.nilai += TextBotJawabArmi.nilaiJawabAkhir;
                    botArmi.pertanyaan('pertanyaan5');
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            } else {
                setTimeout(() => {
                    botArmi.Jawab4 = false;
                    botArmi.pertanyaan('pertanyaan5');
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            }
        } else if (this.Jawab5) {
            if (text == TextBotJawabArmi.jawaban[17]) {
                setTimeout(() => {
                    botArmi.Jawab5 = false;
                    TextBotJawabArmi.nilaiJawab();
                    botArmi.nilai += TextBotJawabArmi.nilaiJawabAkhir;
                    TextBotJawabArmi.pesannya();
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            } else {
                setTimeout(() => {
                    botArmi.Jawab5 = false;
                    TextBotJawabArmi.pesannya();
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.responJawab[0]);
                    botArmi.scrollBottom();
                }, 1000)
            }
        }

    };

    this.fungsi2 = (text) => {

        if (text == `siap`) {
            this.kondisi2 = true;

            let textSiap = `<div div class="theChat" >
    <div class="Chat">
        <div class="borderChat">
            <p class="text">Saya siap!</p>
            <p class="hourMinutes">${botArmi.jam}:${botArmi.menit}</p>
        </div>
    </div>
                </div > `;

            chatGroup.insertAdjacentHTML(`beforeend`, textSiap)
            botArmi.pertanyaan(`Siap`);
        } else {
            let textTSiap = `<div div class="theChatB" >
    <div class="ChatB">
        <div class="borderChatB">
            <p class="text">Baiklah ${botArmi.namaPengguna}. Sepertinya kamu belum siap. Wawancara dilaksanakan di lain waktu saja.</p>
            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
        </div>
    </div>
            </div > `;

            chatGroup.insertAdjacentHTML(`beforeend`, textTSiap)
            botArmi.scrollBottom()
        }
    };

    this.fungsi = (text) => {

        if (this.kondisi1) {
            this.namaPengguna = text;

            setTimeout(() => {
                let sapaAnda = `<div div class="theChatB" >
    <div class="ChatB">
        <div class="borderChatB">
            <p class="text">Waw nama yang indah! ${this.namaPengguna}. Baiklah, saya akan menjelaskan sedikit mengenai wawancara kita pada hari ini.</p>
            <p class="hourMinutesB">${this.jam}:${this.menit}</p>
        </div>
    </div>
                </div > `;
                chatGroup.insertAdjacentHTML(`beforeend`, sapaAnda);
                botArmi.scrollBottom()

                setTimeout(() => {
                    let aturan = `<div div class="theChatB" >
    <div class="ChatB">
        <div class="borderChatB">
            <p class="text" >Wawancara akan terdiri dari 5 pertanyaan pilihan ganda dan
                wawancara ini akan di akhiri dengan pesan yang ingin kamu sampaikan. <br><br> Aturan cara menjawab: <br>
                    1. Tidak memberikan informasi yang tidak diperlukan.<br>
                        2. Tidak menggunakan bahasa yang tidak tepat.</p>
                    <p class="hourMinutesB">${this.jam}:${this.menit}</p>
                </div>
                </div>
                </div>`;

                    chatGroup.insertAdjacentHTML(`beforeend`, aturan);
                    botArmi.scrollBottom()

                    setTimeout(() => {
                        let siapT = `<div class="theChatB">
                    <div class="ChatB">
                        <div class="borderChatB">
                            <p class="text">Apakah kamu siap?</p>
                            <span class="buttonChatS-T">
                                <button id="buttonSTD" onclick="botArmi.fungsi2('siap'); botArmi.buttonSTD();">Siap</button>
                                <button id="buttonSTD" onclick="botArmi.fungsi2('tidak'); botArmi.buttonSTD();">Tidak</button>
                            </span>
                            <p class="hourMinutesB">${this.jam}:${this.menit}</p>
                        </div>
                    </div>
                </div>`;

                        chatGroup.insertAdjacentHTML(`beforeend`, siapT);
                        botArmi.scrollBottom()
                    }, 1500);
                }, 1500);
            }, 1500);

            this.kondisi1 = false;
        }

        this.pertanyaan = (text) => {
            if (this.kondisi2) {
                if (text == `Siap`) {
                    setTimeout(() => {
                        chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.headingSoalPG[0]);
                        botArmi.scrollBottom()

                        setTimeout(() => {
                            botArmi.Jawab1 = true;
                            chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.pertanyaanPG[0]);
                            botArmi.scrollBottom()
                        }, 1500)
                    }, 1500)
                };
            } else if (text == 'pertanyaan2') {
                setTimeout(() => {
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.headingSoalPG[1]);
                    botArmi.scrollBottom()

                    setTimeout(() => {
                        botArmi.Jawab2 = true;
                        chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.pertanyaanPG[1]);
                        botArmi.scrollBottom()
                    }, 1500)
                }, 1500)
            } else if (text == 'pertanyaan3') {
                setTimeout(() => {
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.headingSoalPG[2]);
                    botArmi.scrollBottom()

                    setTimeout(() => {
                        botArmi.Jawab3 = true;
                        chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.pertanyaanPG[2]);
                        botArmi.scrollBottom()
                    }, 1500)
                }, 1500)
            } else if (text == 'pertanyaan4') {
                setTimeout(() => {
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.headingSoalPG[3]);
                    botArmi.scrollBottom()

                    setTimeout(() => {
                        botArmi.Jawab4 = true;
                        chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.pertanyaanPG[3]);
                        botArmi.scrollBottom()
                    }, 1500)
                }, 1500)
            } else if (text == 'pertanyaan5') {
                setTimeout(() => {
                    chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.headingSoalPG[4]);
                    botArmi.scrollBottom()

                    setTimeout(() => {
                        botArmi.Jawab5 = true;
                        chatGroup.insertAdjacentHTML(`beforeend`, TextBotArmi.pertanyaanPG[4]);
                        botArmi.scrollBottom()
                    }, 1500)
                }, 1500)
            }

        }

        this.akhirPesanWawancarak = (text) => {

            if (this.akhirWawancara) {
                TextBotJawabArmi.pesan = text;
                TextBotJawabArmi.akhirJawab()
                this.akhirWawancara = false;
            }
        }
    };

    this.namaPengguna = this.namaPengguna;
    // -------------------------------------------------------------------------------------------- //
    this.date = new Date();
    this.hari = this.date.getDate();
    this.bulanN = this.date.getMonth();
    this.tahun = this.date.getFullYear();
    this.bulan = bulan;
    this.tahun2Digit = this.tahun % 100;
    this.jam = this.date.getHours() < 10 ? '0' + this.date.getHours() : this.date.getHours();
    this.menit = this.date.getMinutes() < 10 ? '0' + this.date.getMinutes() : this.date.getMinutes();
    tanggalChat.innerHTML = `${this.hari} ${this.bulan[this.bulanN]} ${this.tahun2Digit}`;
    // -------------------------------------------------------------------------------------------- //
    this.scrollBottom = () => {
        scrollB.scrollIntoView({ behavior: "smooth", block: "end" })
    }

    nicknameBot.innerHTML = this.nama;
};


//-------------------------------------------------------------------------------------------------------------
let botSend = () => {
    if (inputchat.value == `` || inputchat.value == ` `) {

    } else {
        let namaAnda = `<div class="theChat">
                    <div class="Chat">
                        <div class="borderChat">
                            <p class="text">${inputchat.value}</p>
                            <p class="hourMinutes">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`;

        botArmi.penggunaChat = inputchat.value;
        botArmi.fungsi(inputchat.value);
        botArmi.akhirPesanWawancarak(inputchat.value);
        chatGroup.insertAdjacentHTML(`beforeend`, namaAnda);
        inputchat.value = '';
    };
};
//-------------------------------------------------------------------------------------------------------------------------
function firstMess() {
    let fM = `<div class="theChatB">
                    <div class="ChatB">
                        <div class="borderChatB">
                            <p class="textB">Ohh haloo! Perkenalkan saya ${botArmi.nama}. Salam hangat dan terimakasih telah
                                datang di wawancara ${botArmi.judul}. Sebelum memulai sesi wawancara ini, kamu perlu memberikan
                                nama kamu.</p>
                            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`;

    chatGroup.insertAdjacentHTML('beforeend', fM);
};
document.addEventListener('DOMContentLoaded', () => {
    firstMess()
});
//--------------------------------------------------------------------------------------------------------
let botArmi = new bot(`Asisten Armi`, [`Jan`, `Feb`, `Mar`, `Apr`, `Mei`, `Jun`, `Jul`, `Ags`, `Sep`, `Okt`, `Nov`, `Des`], ``, `"Seberapa dekat kamu dengan Armi"`, 0);

let TextBotJawabArmi = new TextBotJawab([`Ketinggian`, `Kegelapan`, `Kegagalan`, `Kesepian`,
    `Ketika rencana mendadak berubah`, `Ketika orang tidak menghargai pendapatku`, `Ketika ada yang mengkritik saya`, `Ketika seseorang marah tanpa alasan`,
    `Pernah`, `Tidak`,
    `Komedi`, `Petualangan`, `Fantasi`, `Romantis`,
    `12 Februari`, `11 Januari`, `12 Januari`, `11 Februari`]);

let TextBotArmi = new TextBot(/*PERTANYAAN-----START*/[
    // ----------------------------------------------------------
    `<div class="theChatB">
                <div class="ChatB">
                    <div class="borderChatB">
                        <p class="text">Apa yang paling membuat Armi takut?</p>
                        <div class="buttonJawaban">
                            <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[0]}'); botArmi.buttonSTD2();">
                                <div class="jawaban">${TextBotJawabArmi.jawaban[0]}</div>
                            </button>
                            <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[1]}'); botArmi.buttonSTD2();">
                                <div class="jawaban">${TextBotJawabArmi.jawaban[1]}</div>
                            </button>
                            <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[2]}'); botArmi.buttonSTD2();">
                                <div class="jawaban">${TextBotJawabArmi.jawaban[2]}</div>
                            </button>
                            <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[3]}'); botArmi.buttonSTD2();">
                                <div class="jawaban">${TextBotJawabArmi.jawaban[3]}</div>
                            </button>
                        </div>
                        <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                    </div>
                </div>
            </div>`
    // ----------------------------------------------------------
    , `<div class="theChatB">
    <div class="ChatB">
        <div class="borderChatB">
            <p class="text">Apa yang paling membuat Armi marah?</p>
            <div class="buttonJawaban">
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[4]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[4]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[5]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[5]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[6]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[6]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[7]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[7]}</div>
                </button>
            </div>
            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
        </div>
    </div>
</div>`,
    // ----------------------------------------------------------
    `<div class="theChatB">
    <div class="ChatB">
        <div class="borderChatB">
            <p class="text">Apakah Armi pernah pacaran?</p>
            <div class="buttonJawaban">
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[8]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[8]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[9]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[9]}</div>
                </button>
            </div>
            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
        </div>
    </div>
</div>`,
    // ----------------------------------------------------------
    `<div class="theChatB">
    <div class="ChatB">
        <div class="borderChatB">
            <p class="text">Manakah genre filem favorit Armi?</p>
            <div class="buttonJawaban">
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[10]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[10]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[11]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[11]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[12]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[12]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[13]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[13]}</div>
                </button>
            </div>
            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
        </div>
    </div>
</div>`,

    `<div class="theChatB">
    <div class="ChatB">
        <div class="borderChatB">
            <p class="text">Manakah tanggal dan bulan kelahiran Armi?</p>
            <div class="buttonJawaban">
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[14]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[14]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[15]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[15]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[16]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[16]}</div>
                </button>
                <button id="buttonJawab" onclick="botArmi.cekJawab('${TextBotJawabArmi.jawaban[17]}'); botArmi.buttonSTD2();">
                    <div class="jawaban">${TextBotJawabArmi.jawaban[17]}</div>
                </button>
            </div>
            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
        </div>
    </div>
</div>`,
], [
    // ----------------------------------------------------------
    `<div div class= "theChatB" >
    <div class="ChatB">
        <div class="borderChatB">
            <p class="text">Jawaban diterima.</p>
            <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
        </div>
    </div>
                    </div > `
    // ----------------------------------------------------------
], [
    `<div class="theChatB">
                <div class="ChatB">
                    <div class="borderChatB">
                              <p class="text">Pertanyaan 1</p>
                              <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`,

    `<div class="theChatB">
                <div class="ChatB">
                    <div class="borderChatB">
                              <p class="text">Pertanyaan 2</p>
                              <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`,

    `<div class="theChatB">
                <div class="ChatB">
                    <div class="borderChatB">
                              <p class="text">Pertanyaan 3</p>
                              <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`,

    `<div class="theChatB">
                <div class="ChatB">
                    <div class="borderChatB">
                              <p class="text">Pertanyaan 4</p>
                              <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`,

    `<div class="theChatB">
                <div class="ChatB">
                    <div class="borderChatB">
                              <p class="text">Pertanyaan 5</p>
                              <p class="hourMinutesB">${botArmi.jam}:${botArmi.menit}</p>
                        </div>
                    </div>
                </div>`,

]);
