# Stage 1: 
	FROM node:20 as build
	WORKDIR /app
	
	COPY package*.json ./
	RUN npm install
	COPY . .
	#Get ready with production binaries that can be deployed
	RUN npm run build
	
#Stage2:server react app
	
	FROM nginx:stable-alpine
	COPY --from=build /app/dist /usr/share/nginx/html
	
	EXPOSE 80
	#Run Nginx
	CMD ["nginx","-g","daemon off;"]