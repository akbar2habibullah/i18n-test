FROM node:14.15.4-alpine

EXPOSE 9000

RUN apk add --upgrade --no-cache python make g++ \
    && apk add vips-dev fftw-dev build-base \
    --update-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/v3.10/community/ \
    && rm -fR /var/cache/apk/*

RUN npm install -g gatsby-cli

WORKDIR /app

ADD ./package.json .

RUN apk add shadow \                                                                   
    gcc \                                                                                         
    musl-dev \                                                                                    
    autoconf \                                                                                    
    automake \                                                                                    
    make \                                                                                        
    libtool \                                                                                     
    nasm \                                                                                        
    tiff \                                                                                        
    jpeg \                                                                                        
    zlib \                                                                                        
    zlib-dev \                                                                                    
    file \                                                                                        
    pkgconf \
    && yarn install --network-timeout 1000000 \
    && yarn cache clean

ADD . .
RUN gatsby clean
RUN gatsby build
CMD ["gatsby", "serve", "-H", "0.0.0.0" ]
