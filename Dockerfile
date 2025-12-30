# Step 1: Build the React app
FROM node:20-alpine AS build
WORKDIR /app

# Accept the API Key as a build argument
ARG GEMINI_API_KEY

COPY package*.json ./
RUN npm install

COPY . .

# Write the API Key to .env.local so Vite can see it
# Note: Vite variables must start with VITE_ to be public
RUN echo "VITE_GEMINI_API_KEY=$GEMINI_API_KEY" > .env.local

RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine
# Copy our custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the build folder from the first step
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
