// MIT License

// Copyright (c) 2022 Ai4Energy Team of Xi'an Jiaotong Universiy

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

db = db.getSiblingDB("admin");
db = db.getSiblingDB("authorization");
if (!db.getUser("admin")) {
    db.createUser({
        user: "admin",
        pwd: "dlgcdxlgjzdsys",
        roles: [
            {
                role: "readWrite",
                db: "authorization",
            },
        ],
    });
}

db = db.getSiblingDB("admin");
if (!db.getUser("admin")) {
    db.createUser({
        user: "admin",
        pwd: "dlgcdxlgjzdsys",
        roles: [
            {
                role: "readWrite",
                db: "admin",
            },
        ],
    });
}

db = db.getSiblingDB("metapse");
if (!db.getUser("metapse")) {
    db.createUser({
        user: "metapse",
        pwd: "dlgcdxlgjzdsys",
        roles: [
            {
                role: "readWrite",
                db: "metapse",
            },
        ],
    });
}
