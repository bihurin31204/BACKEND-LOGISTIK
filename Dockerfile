# Gunakan base image resmi Node (versi boleh disesuaikan)
FROM node:18

# Tentukan folder kerja di dalam container
WORKDIR /app

# Copy file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh project ke folder kerja
COPY . .

# Generate Prisma Client (opsional, tergantung kebutuhan)
RUN npx prisma generate

# Jalankan migrate (jika pakai migrate dan butuh autopush/migrate)
# RUN npx prisma migrate deploy

# Ekspos port 3000 (atau sesuai dengan port yang Anda gunakan)
EXPOSE 3000

# Perintah untuk menjalankan server
CMD ["npm", "start"]
